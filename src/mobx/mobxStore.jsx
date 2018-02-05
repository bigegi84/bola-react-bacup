import { observable} from "mobx";
// class mobxStore {
//   data=observable("");
//   penulisArtikel=observable([]);
//   // @observable todos = [];
//   // @observable pendingRequests = 0;
//   constructor() {
//     mobx.autorun(() => console.log(this.penulisArtikel));
//   }
//   // @computed get completedTodosCount() {
//   //   return this.todos.filter(
//   //     todo => todo.completed === true
//   //   ).length;
//   // }
//   //
//   // @computed get report() {
//   //   if (this.todos.length === 0)
//   //     return "<none>";
//   //   return `Next todo: "${this.todos[0].task}". ` +
//   //     `Progress: ${this.completedTodosCount}/${this.todos.length}`;
//   // }
//   //
//   // addTodo(task) {
//   //   this.todos.push({
//   //     task: task,
//   //     completed: false,
//   //     assignee: null
//   //   });
//   // }
// }
// const observableTodoStore = new mobxStore();
export default observable(
  {
    tema:'',
    croppie:'',
    tamuMasuk:{
      nilai:'hsjdak',
      sandi:''
    },
    tamuArtikelSatu:{
      waktu:'',
      manusia:{
        pengguna:'',
        gambar:{

        }
      },
      gambar:{
        url:''
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
      gambar:{
        url:''
      }
    },
    penulisManusiaSayaTambal: {
      kolom:'',
      nilai:''
    },
    penulisManusiaSayaUbah: {
      nama:'',
      email:'',
      pengguna:'',
      gambar:''
    },
    penulisArtikel:[],
    penulisArtikelSayaSemuaPaginasi:{
      data:[]
    },
    penulisArtikelBuat:{
      judul:'',
      konten:'',
      deskripsi:'',
      id_menu:'',
      gambar:''
    },
    penulisArtikelSayaSatu:{
      gambar:{
        url:''
      }
    },
    penulisArtikelSayaUbah:{
      gambar:'',
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