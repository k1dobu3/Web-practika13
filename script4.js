class pc{
    constructor(name, proc, vid){
      this.name = name;
      this.proc = proc;
      this.vid = vid;
    }
  }
  
  let pcs = [
    new pc('pc1', 'intel', 'nvidiartx2060'), 
    new pc('pc2', 'risen', 'amd'), 
    new pc('pc3', 'intel', 'gt1030')
  ]
  
  let chouse = 3;
  
  console.log(pcs[chouse - 1])