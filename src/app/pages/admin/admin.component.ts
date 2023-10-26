import { Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent {
  nbaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nbaForm = this.fb.group({
      title: ['', Validators.required],
      id: [0, Validators.required],
      intro: '',
      paragraph: this.fb.array([this.newParagraph()]), // You may need to handle the array of paragraphs separately
      conclusion: '',
      thumbnail: '',
      tags: this.fb.array(['']), // You may need to handle the array of tags separately
      date: '',
      isTrending: false, // Assuming isTrending is a boolean
      meta: this.fb.group({
        title: '',
        description: '',
        keywords: ''
      })
    });
  }

  get paragraphControls() {
    return (this.nbaForm.get('paragraph') as FormArray).controls;
  }

  get tagsControls() {
    return (this.nbaForm.get('tags') as FormArray).controls;
  }

  submit(): void {
    console.log(this.nbaForm.value, this.nbaForm)

    const value = this.nbaForm.value;
    let paravalue;
    this.nbaForm.value.paragraph.map(x => {
      if(x.content) {
        const para_title = x.content.para_title ? `<strong>${x.content.para_title}</strong><br>` : '';
        const para_text = x.content.para_text ? `<p>${x.content.para_text.replace(/\n/g, '<span></span>')}</p>` : '';
        x.content = para_title + para_text
      }
      console.log(x.content)
    })
  }

  removeParagraph(index: number) {
    const paragraphArray = this.nbaForm.get('paragraph') as FormArray;
    paragraphArray.removeAt(index);
  }

  addParagraph() {
    const paragraphArray = this.nbaForm.get('paragraph') as FormArray;
    paragraphArray.push(this.newParagraph()); // Add an empty paragraph field
  }

  addParagraphImage() {
    const paragraphArray = this.nbaForm.get('paragraph') as FormArray;
    paragraphArray.push(this.newParagraphImage()); // Add an empty paragraph field
  }

  newParagraph(): FormGroup {
    return this.fb.group({
      content: this.fb.group({
        para_title: 'd',
        para_text: 'dd',
      })
    });
  }

  newParagraphImage(): FormGroup {
    return this.fb.group({
      images: this.fb.group({
        path: 'image path',
        title: 'image title',
      })
    });
  }
}
