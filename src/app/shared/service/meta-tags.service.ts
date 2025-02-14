import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BlogPost } from '../interfaces/blog-post.interface';

export interface IMetaTags {
  description: string,
  keywords: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {
  private isBrowser = false;
  private pageUrl: string = '';

  constructor(
    private _meta: Meta, 
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private dom) { 
      this.isBrowser = isPlatformBrowser(this.platformId)
    }

  createCanonicalLink(url?: string) {
      let canURL = url == undefined ? this.dom.URL : url;
      this.pageUrl = canURL.replace('http', 'https').replace('httpss', 'https');
      const canonicalElement = this.dom.querySelector('link[rel="canonical"]');
      if(canonicalElement) {
        canonicalElement.href = this.pageUrl;
      } else {
        let link: HTMLLinkElement = this.dom.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(link);
        link.setAttribute('href', this.pageUrl);
      }
  }

  addedLCPImage(imageURL: string) {
    let link: HTMLLinkElement = this.dom.createElement('link');

    link.setAttribute('rel', 'preload');
    link.setAttribute('fetchpriority', 'high');
    link.setAttribute('as', 'image');
    link.setAttribute('type', 'image/webp');
    link.setAttribute('href', imageURL);
    this.dom.head.appendChild(link);

  }

  updateMetaTags(meta: IMetaTags, image?: string): void {
    this.title.setTitle(meta?.title);
    this.createCanonicalLink();
    meta.keywords = meta.keywords.concat(', Personal Blogging, Blog Contents, Blogs, Finance, Social, Sports, Quick Blogs')

    this._meta.updateTag( { name: "description", content: meta.description }, "name='description'");
    this._meta.updateTag( { name: "keywords", content: meta.keywords }, "name='keywords'");
    this._meta.updateTag( { name: "image", content: image }, "name='image'");
    this._meta.updateTag( { name: "robots", content: 'index, follow' }, "name='robots'");
    // <meta property=og:locale content=en_US />
    this._meta.updateTag( { property: 'og:site_name', content: 'QuickBlogs' }, "property='og:site_name'");
    this._meta.updateTag( { property: 'og:locale', content: 'en_US' }, "property='og:locale'");
    this._meta.updateTag( { property: 'og:type', content: 'website' }, "property='og:type'");
    this._meta.updateTag( { property: 'og:url', content: this.pageUrl }, "property='og:url'");
    this._meta.updateTag( { property: 'og:title', content: meta.title }, "property='og:title'");
    this._meta.updateTag( { property: 'og:description', content: meta.description }, "property='og:description'");
    this._meta.updateTag( { property: 'og:image:secure_url', content: image }, "property='og:image:secure_url'");
    this._meta.updateTag( { property: 'og:image', content: image }, "property='og:image'");

    this._meta.updateTag( { name: "author", content: 'Quick Blog' }, "name='author'");
    this._meta.updateTag( { name: "publisher", content: 'Keval Vadhiya' }, "name='publisher'");
    this._meta.updateTag( { name: "copyright", content: 'Copyright © 2023 Quick Blogs' }, "name='copyright'");
    this._meta.updateTag( { name: "language", content: 'English' }, "name='language'");
    
    this._meta.updateTag({ name: 'twitter:creator', content: `@KevalVadhiya`}, "name='twitter:creator'")
    this._meta.updateTag({ name: 'twitter:site', content: `@quick_blogs`}, "name='twitter:site'")
    this._meta.updateTag({ name: 'twitter:title', content: meta.title}, "name='twitter:title'")
    this._meta.updateTag({ name: 'twitter:description', content: meta.description}, "name='twitter:description'")
    this._meta.updateTag({ name: 'twitter:image', content: image}, "name='twitter:image'")
    this._meta.updateTag({ name: 'twitter:card', content: 'summary_large_image'}, "name='twitter:card'")
  }

  updateStructuredData(blog: BlogPost) {
    let canURL = this.dom.URL;
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canURL.replace('http', 'https').replace('httpss', 'https')
      },
      "headline": blog.title,
      "description": blog.meta.description,
      "image": [ blog.thumbnail ],  
      "author": {
        "@type": "Person",
        "name": "Keval Vadhiya",
        "url": "https://twitter.com/quick_blogs"
      },  
      "publisher": {
        "@type": "Organization",
        "name": "Keval Vadhiya",
        "logo": {
          "@type": "ImageObject",
          "url": "https://i.imgur.com/ks78Yj4.png"
        }
      },
      "datePublished": blog.date,
      "dateModified": blog.date
    }

    // Remove the existing JSON-LD script
    const existingScript = this.dom.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      let link: HTMLLinkElement = this.dom.createElement('script');
      link.setAttribute('type', 'application/ld+json');
      link.textContent = JSON.stringify(structuredData);
      this.dom.head.appendChild(link)
    }
  }
}
