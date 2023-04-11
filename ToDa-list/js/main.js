const btn = document.getElementById('button');
const container = document.getElementById('container');

class List {
  constructor(title, limit, discription){
    this.ttl = title;
    this.lmt = limit;
    this.dct = discription;
    this.deleteButton = document.createElement('a');
    this.deleteButton.textContent = 'Χ';
    this.deleteButton.classList.add('delete-button');
    this.statusBar = document.createElement('div');
    this.statusBar.classList.add('status-bar');
    this.checkBox = document.createElement('input');
  };
  create() {
    // チェックボックス
    this.checkBox.setAttribute('type', 'checkbox');
    this.checkBox.classList.add('checkbox');

    // 削除キー
    const deleteKey = document.createElement('p');
    deleteKey.classList.add('delete-key');

    // 入力値
    const titleElement = document.createElement('h2');
    titleElement.classList.add('title');
    const limitElement = document.createElement('p');
    limitElement.classList.add('limit');
    const discriptionElement = document.createElement('p');
    discriptionElement.classList.add('discription');
    const important = document.getElementById('important');
    const barList = document.getElementsByClassName('status-bar');
    const discriptionMessage = document.createElement('p');
    discriptionMessage.classList.add('discription-message');
    discriptionMessage.textContent = '詳細';
    titleElement.textContent = this.ttl;
    limitElement.textContent = this.lmt;
    discriptionElement.textContent = this.dct;

    // HTMLへ挿入
    if(important.checked === true && barList[0] !== undefined){
      container.insertBefore(this.statusBar, barList[0]);
      barList[0].classList.add('important-list');
    }else if(important.checked === true && barList[0] == undefined){
      container.appendChild(this.statusBar);
      barList[0].classList.add('important-list');
    }else {
      container.appendChild(this.statusBar);
    };
    this.statusBar.appendChild(this.checkBox);
    this.statusBar.appendChild(titleElement);
    this.statusBar.appendChild(limitElement);
    this.statusBar.appendChild(discriptionMessage);
    this.statusBar.appendChild(discriptionElement);
    this.statusBar.appendChild(deleteKey);
    deleteKey.appendChild(this.deleteButton);
    const statusBar = this.statusBar;
    const checkBox = this.checkBox;

    // チェックtoggleClass
    statusBar.classList.add('common');
    setTimeout(function(){statusBar.classList.remove('common')},600);
    checkBox.addEventListener('click', ()=> {
      statusBar.classList.toggle('checked');
    });
    discriptionMessage.addEventListener('click', ()=> {
      if(this.dct !== ''){
        discriptionElement.classList.toggle('fade-in');
        statusBar.classList.toggle('slide');
        statusBar.classList.add('slide-up');
      }else if(this.dct === ''){
        statusBar.classList.add('none');
        setTimeout(function(){
          statusBar.classList.remove('none')
        },300)
      }
    });

    // リスト削除
    let flag = true;
    this.deleteButton.addEventListener('click', function(){
      statusBar.classList.add('clear');
      if(flag){
        flag = false;
        setTimeout(() => {
          statusBar.parentNode.removeChild(statusBar);
          flag = true;
        }, 850);
      }
    });
    this.deleteButton.addEventListener('click', function(event){
      if(!flag){
        event.preventDefault();
      }
    });
  };
};

// リスト作成
btn.addEventListener('click', function(){
  const ttl = document.getElementById('title');
  const lmt = document.getElementById('limit');
  const dct = document.getElementById('discription');
  if(ttl.value !== ''){
    let list = new List(ttl.value, lmt.value, dct.value);
    setTimeout(function(){list.create()},600)
    ttl.value = '';
    lmt.value = '';
    dct.value = '';
  };
});

// チェッククラス着脱
const important = document.getElementById('important');
const form = document.getElementById('form');
const pageTitle = document.getElementById('page-title');
important.addEventListener('click', function(){
  form.classList.toggle('checked');
  btn.classList.toggle('checked');
  pageTitle.classList.toggle('checked');
})