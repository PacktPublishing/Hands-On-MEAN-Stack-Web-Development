import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postList;
  post = {
    title: '',
    url: ''
  };
  constructor() {
    this.postList = [{
      _id: 1,
      title: 'The First Post Title',
      url: 'http://google.co.in/',
      votes: 85
    }, {
      _id: 2,
      title: 'The Second Post Title',
      url: 'http://facebook.com/',
      votes: 11
    }, {
      _id: 3,
      title: 'The third Post Title',
      url: 'http://youtube.com/',
      votes: 36
    }, {
      _id: 4,
      title: 'The fourth Post Title',
      url: 'http://twitter.com/',
      votes: 5
    }];
  }
  addPost() {
    const newPost = {
      title: this.post.title,
      url: this.post.url,
      votes: 0
    };
    this.postList.push(newPost);
    this.post = { title: '', url: ''};
    this.sortPosts();
  }
  upVote(post) {
    const thePost = this.postList.find(itm => post._id === itm._id);
    thePost.votes = thePost.votes + 1;
    this.sortPosts();
  }
  downVote(post) {
    const thePost = this.postList.find(itm => post._id === itm._id);
    thePost.votes = thePost.votes - 1;
    this.sortPosts();
  }
  deletePost(post) {
    const index = this.postList.indexOf(post);
    this.postList.splice(index, 1);
  }
  sortPosts() {
    this.postList.sort((a, b) => Number(a.votes) < Number(b.votes));
  }
}
