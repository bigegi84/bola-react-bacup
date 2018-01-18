import mobx from 'mobx'
import { observable, computed } from "mobx";
class mobxStore {
  data=observable("");
  penulisArtikel=observable([]);
  // @observable todos = [];
  // @observable pendingRequests = 0;
  constructor() {
    mobx.autorun(() => console.log(this.penulisArtikel));
  }
  // @computed get completedTodosCount() {
  //   return this.todos.filter(
  //     todo => todo.completed === true
  //   ).length;
  // }
  //
  // @computed get report() {
  //   if (this.todos.length === 0)
  //     return "<none>";
  //   return `Next todo: "${this.todos[0].task}". ` +
  //     `Progress: ${this.completedTodosCount}/${this.todos.length}`;
  // }
  //
  // addTodo(task) {
  //   this.todos.push({
  //     task: task,
  //     completed: false,
  //     assignee: null
  //   });
  // }
}
// const observableTodoStore = new mobxStore();
export default observable(
  {
    croppie:'',
    tamuMasuk:{
      nilai:'',
      sandi:''
    },
    tamuArtikelSatu:{
      manusia:{
        pengguna:'',
        gambar:{

        }
      },
      menu:{

      }
    },
    tamuArtikelPaginasi:{
      data:[]
    },
    tamuMenuArtikel:[],
    tamuMenuArtikelPaginasi:{
      data:[]
    },
    menu:[],
    pengurusManusia:[],
    pengurusManusiaBuat:{
      nama:'',
      email:'',
      pengguna:'',
      sandi:'',
    },
    pengurusVariabel:[],
    pengurusVariabelBuat:{
      nama:'',
      nilai:''
    },
    //penulis
    penulisManusiaSaya: {
      gambar: {}
    },
    penulisManusiaSayaUbah: {
      nama:'',
      email:'',
      pengguna:'',
      gambar:''
    },
    penulisArtikel:[],
    penulisArtikelBuat:{
      judul:'',
      konten:'',
      deskripsi:'',
      id_menu:'',
      gambar:''
    },
    penulisArtikelSayaSatu:{},
    penulisArtikelSayaUbah:{
      judul:'',
      konten:'',
      deskripsi:'',
      id_menu:0
    },
    judul:{
      nilai:""
    },
    copyright:{
      nilai:""
    },
    history:{}
  }
)