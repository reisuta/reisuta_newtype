"use strict";
{
  
    const target = document.getElementById("target");
    const result = document.getElementById('result');
    const html = document.getElementById('html');
    const japa = document.getElementById("japa");
    const atag1 = document.getElementById("a_tag1")
    const atag2 = document.getElementById("a_tag2")
    
    
    let word;
    let word1; 
    let word2;

    let isPlaying;
    let time;
    let loc = 0;

    
  function setWords(){
    
   
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
 
    word1 = word[0]; 
    word2 = word[1];
  
    target.textContent = word1;
    japa.textContent = word2;

    loc = 0;
  };

  
  window.onload = function start(){
    if (isPlaying === true){
      return;
    }
    
    isPlaying = true;
    
    time = Date.now();
    
    setWords();
    
    html.innerHTML = keyboard;
    
    
  }  
  

  const gameover = () => {
    
    clearInterval(id);
  };
  
  
  const countup = () => {
    
    let timer = document.getElementById('timer');
    let count = 10;
    
    const id = setInterval(() => {
      if (count <= 0){
        gameover();
        
        result.textContent = 'Time' + 'over';
        target.style.display = 'none';
      }
      timer.textContent = count--}, 1000);
    };
    
  
    
    
    document.addEventListener('keydown', (e) => { 
      target.style.background = 'skyblue';

console.log(word1[loc]);
console.log(e.key);
      if (e.key !== word1[loc]){
        target.style.background = 'pink';
        return;
  
        
        
      }

    console.log(word1);
      
      if (e.key === word1[loc]){
        
        loc++;
        target.textContent = '-'.repeat(loc) + word1.substring(loc);
        
      }
      
      
      // 新しい単語を複製
      if (loc === word1.length){
        
        
        if (words.length === 0){
          const elapsedtime = ((Date.now() - time) / 1000).toFixed(2); 
          result.textContent = `finished! ${elapsedtime}秒`;
          
         target.style.display = 'none';
         japa.style.display = 'none';
         atag1.classList.add("a_tag2");
         atag2.classList.add("a_tag2");
         atag1.textContent = "もう一度プレイする";
         atag2.textContent = "スコアを登録する";
         
         
         return;
        }

      setWords();



    }







  document.addEventListener('click', (e) => { 
    target.textContent = words[rdn];

});

  });





const keyboard = '' 
            + '<table id="keyBoard">'
            + '<tr id="tr">'
            + '<td colspan="30" class="col30">'
            + '<span class="func">Esc</span>'
            + '<span class="func">F1</span>'
            + '<span class="func">F2</span>'
            + '<span class="func">F3</span>'
            + '<span class="func">F4</span>'
            + '<span class="func">F5</span>'
            + '<span class="func">F6</span>'
            + '<span class="func">F7</span>'
            + '<span class="func">F8</span>'
            + '<span class="func">F9</span>'
            + '<span class="func">F10</span>'
            + '<span class="func">F11</span>'
            + '<span class="func">F12</span>'
            + '<span class="func">Num</span>'
            + '<span class="func">Prt</span>'
            + '<span class="func">Ins</span>'
            + '<span class="func">Del</span>'
            + '</td>'
            + '</tr>'
            + '<tr class="tr1">'
            + '<td colspan="1" class="col1 key"><div class="tablecode244">半</div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode049">1<span class="subkey">!</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode050">2<span class="subkey">”</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode051">3<span class="subkey">#</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode052">4<span class="subkey">$</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode053">5<span class="subkey">%</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode054">6<span class="subkey">&</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode055">7<span class="subkey">’</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode056">8<span class="subkey">（</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode057">9<span class="subkey">）</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode048">0</div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode189 code109 code173 code045">-<span class="subkey">=</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode222 code160">^<span class="subkey">~</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="tablecode220">\<span class="subkey">|</span></div></td>'
            + '<td colspan="3" class="col3 key"><div class="tablecode008">Back</div></td>'
            + '</tr>'
            + '<tr class="tr2">'
            + '<td colspan="2" class="col2 key"><div class="tablecode009">Tab</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code081">Q</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code087">W</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code069">E</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code082">R</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code084">T</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code089">Y</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code085">U</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code073">I</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code079">O</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code080">P</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code192 code064">@<span class="subkey">`</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code219">[<span class="subkey">{</span></div></td>'
            + '<td colspan="1" class="col1 key"></td>'
            + '<td colspan="3" rowspan="2" class="col3 key"><div class="table code013 row2">Enter</div></td>'
            + '</tr>'
            + '<tr class="tr3">'
            + '<td colspan="3" class="col3 key"><div class="table code240 code020">英数</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code065">A</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code083">S</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code068">D</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code070">F</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code071">G</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code072">H</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code074">J</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code075">K</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code076">L</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code187 code107 code059">;<span class="subkey">+</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code186 code058">:<span class="subkey">*</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code221">]<span class="subkey">}</span></div></td>'
            + '</tr>'
            + '<tr class="tr4">'
            + '<td colspan="4" class="col4 key"><div class="table code016 code020">Shift</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code090">Z</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code088">X</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code067">C</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code086">V</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code066">B</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code078">N</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code077">M</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code188">,<span class="subkey"><</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code190">.<span class="subkey">></span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code191">/<span class="subkey">?</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code226">\<span class="subkey">_</span></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">↑</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table code016">Shift</div></td>'
            + '</tr>'
            + '<tr class="tr5">'
            + '<td colspan="2" class="col2 key"><div class="table">Ctrl</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">Fn</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">Win</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">Alt</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">無</div></td>'
            + '<td colspan="5" class="col5 key"><div class="table code032"></div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">変</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">か</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">Alt</div></td>'
            + '<td colspan="1" class="col1 key"><div class="table">App</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">Ctrl</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">←</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">↓</div></td>'
            + '<td colspan="2" class="col2 key"><div class="table">→</div></td>'
            + '</tr>'
            + '</table>';


   
      

};