import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { title } from 'process';
import { BlogService } from '../../../services/blog.service';
import { blogDTOs } from '../../../model/blogs.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit {
  constructor(private form: FormBuilder, private blogs: BlogService) {}

  FormBlog = this.form.group({
    title: ['', Validators.required],
    image: ['', Validators.required],
    content: ['', Validators.required],
  });
  isPopup: boolean = true;
  Files: File | undefined;
  listBlogs: blogDTOs[] = [];
  ngOnInit(): void {
    this.LoadPage();
  }

  LoadPage() {
    this.blogs.getData().subscribe((response) => {
      this.listBlogs = response;
    });
  }

  Create() {
    let value = this.FormBlog.value;
    let id = localStorage.getItem('id');
    console.log(value);
    let form = new FormData();
    form.append('healine', value.title as string);
    form.append('content', value.content as string);
    form.append('formFile', this.Files as File);
    form.append('idUser', id as string);
    this.blogs.create(form).subscribe((response) => {
      if (response.code == 200) {
        alert('Thêm bài viết thành công');
        window.location.reload();
        return;
      }
      alert('Thêm bài viết thất bại');
    });
  }

  onFilesSelected(event: any) {
    const files: FileList = event.target.files;
    this.Files = files[0];
  }

  Update(item: blogDTOs) {
    this.FormBlog.get('title')!.setValue(item.headline);
    this.FormBlog.get('content')!.setValue(item.content);
    this.FormBlog.get('image')!.setValue(item.image);
  }

  AddBlog() {
    this.FormBlog.get('title')!.setValue('');
    this.FormBlog.get('content')!.setValue('');
    this.FormBlog.get('image')!.setValue('');
  }
}
