import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TECH IMAGES';
  public currentIndex = 0;
  public content = [{
    name: 'desk1',
    imgUrl: 'https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'desk2',
    imgUrl: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'desk3',
    imgUrl: 'https://images.unsplash.com/photo-1517518295033-d5ab8ca078cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60000'
  },
  {
    name: 'desk4',
    imgUrl: 'https://images.unsplash.com/photo-1590177600178-c2597bd63ea7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600'
  },
  {
    name: 'desk5',
    imgUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }, {
    name: 'desk1',
    imgUrl: 'https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'desk2',
    imgUrl: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'desk3',
    imgUrl: 'https://images.unsplash.com/photo-1517518295033-d5ab8ca078cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60000'
  },
  {
    name: 'desk4',
    imgUrl: 'https://images.unsplash.com/photo-1590177600178-c2597bd63ea7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600'
  },
  {
    name: 'desk5',
    imgUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }, {
    name: 'desk1',
    imgUrl: 'https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'desk2',
    imgUrl: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'desk3',
    imgUrl: 'https://images.unsplash.com/photo-1517518295033-d5ab8ca078cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60000'
  },
  {
    name: 'desk4',
    imgUrl: 'https://images.unsplash.com/photo-1590177600178-c2597bd63ea7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600'
  },
  {
    name: 'desk5',
    imgUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRlc2slMjBzZXR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }
  ];
  public currentPage(i: number) {

    return Math.abs(this.currentIndex - i) < 5;
  };
}
