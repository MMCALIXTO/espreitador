const data = {
  name: 'Yago Togami',
  player: 'Resiak',
  occupation: 'Atleta',
  age: 24,
  sex: 'male',
  birthplace: 'São paulo',
  residence: 'São paulo',

  life: {
    current: 100,
    max: 100,
  },
  sanity: {
    current: 72,
    max: 72,
  },

  lifeo: {
    current: 2,
    max: 2,
  },

  weapons: [
    
  ],
  attributes: [
    {
      type: 'Força',
      amount: 0,
    },
    {
      type: 'Agilidade',
      amount: 1,
    },
    {
      type: 'Vigor',
      amount: 2,
    },
    {
      type: 'Presença',
      amount: 6,
    },
    {
      type: 'Intelecto',
      amount: 5,
    },
    
  ],




  pericias: [
    {
      type:'Vontade',
      amount:'+15',
      },
    
     
      {
        type:'Percepção',
        amount:'+15',
        },
    


    {
      type:'Luta',
      amount:'+05',
      },
  
    {
      type:'Fortitude',
      amount:'+05',
      },
  
   
    










  
    




    ],
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

data.pericias.map((pericia, index) => {
  addpericia(pericia, index)
})







$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#birthplace').val(data.birthplace)
$('#residence').val(data.residence)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.lifeBaro').css('width', `${calculateBar(data.lifeo.current, data.lifeo.max)}%`)
$('#lifeCounto').text(`${data.lifeo.current}/${data.lifeo.max}`)
$('#lifeCurrento').val(data.lifeo.current)
$('#lifeMaxo').val(data.lifeo.max)

$('.sanityBar').css(
  'width',
  `${calculateBar(data.sanity.current, data.sanity.max)}%`
)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)


const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const lifeModalo = $('#lifeModalo')
const sanityModal = $('#sanityModal')

$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'lifeModalo') {
    lifeModalo.css('display', 'none')
  }
   else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  }
})


$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.lifeBaro').click(function () {
  console.log(this)
  lifeModalo.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})

$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})




$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#injury').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento ativado!')
  } else {
    console.log('Modo lesionado desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})

$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})

$('#addWeaponForm').submit(function (event) {
  var weaponType = ''

  if ($('#weaponType').val() == 'fire') {
    weaponType = 'Fisico e Sangue'
  } else if ($('#weaponType').val() == 'fight') {
    weaponType = 'Fisico e Elemental'
  }else if ($('#weaponType').val() == 'Ritual') {
    weaponType = 'Ritual'
  }

  const weapon = {
    name: $('#weaponName').val(),
    type: weaponType,
    damage: $('#weaponDamage').val(),
    damagetw: $('#weaponDamagetwo').val(),
    damageth: $('#weaponDamagethree').val(),
    mod: $('#weaponDamagemod').val(),
    attack: $('#weaponAttack').val(),
    reach: $('#weaponReach').val(),
    cri: $('#weaponcri').val(),
  }


  data.weapons.push(weapon)
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

  closeModal('#addWeaponModal')
  event.preventDefault()
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})






$('#changeLifeo').submit(function (event) {
  let current = Number($('#lifeCurrento').val())
  const max = Number($('#lifeMaxo').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.lifeo.current = current
  data.lifeo.max = max
  $('.lifeBaro').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCounto').text(`${current}/${max}`)

  closeModal('#lifeModalo')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}





  function rollDice(dice) {
    let [count, max] = dice.split('d')
  
    if (Number(count) && Number(max)) {
      count = Number(count)
      max = Number(max)
  
      let total = 0
  
      for (let i = 0; i < count; i++) {
        total += Math.floor(Math.random() * max + 1)
      }
  
      return total
    } else {
      return null
    }
  }







function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}







function addWeaponToTable(weapon, id) {
  const newWeapon = $(`<tr id="weapon_${id}">
  
        <td>
            <button onclick="deleteWeapon(${id})" style="cursor: pointer;">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            
            ${weapon.name}
        </td>
        <td>${weapon.type}</td>
        <td><img onclick="rollDano_${id}()" class="attributeDice" src="./img/dado.png" alt="Dado" style="display: block; margin-left: auto; margin-right: auto; height: 20px; cursor: pointer;">${weapon.damage}</td>
        <td>${weapon.damagetw}</td>
        <td>${weapon.damageth}</td>
        <td>${weapon.mod}</td>
        </tr>
    
    <script>
    
    function rollDano_${id}() {
      console.log(this)
    
    
    
      diceModal.css('display', 'block')
    
      setTimeout(() => {
        $('.modalDice').css('transform', 'rotate(360deg)')
        $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
      }, 1000)
    
      setTimeout(() => {
        $('.sanityDice').css('transform', 'rotate(360deg)')
        $('.sanityDice').css('-webkit-transform', 'rotate(360deg)')
      }, 1000)
    
      
    
      setTimeout(() => {
        let danoum = rollDice('${weapon.damage}')
        let danodois = rollDice('${weapon.damagetw}')
        let danotres = rollDice('${weapon.damageth}')
        let danoquatro = ${weapon.mod}
        const diceNumber = danoum + danodois + danotres + danoquatro
        const diceType = danoum+ "+" +danodois+ "+" +danotres+ "+" +danoquatro
        $('#diceNumber').text(diceNumber)
        $('#diceType').text(diceType)
    
        setTimeout(() => {
          diceModal.css('display', 'none')
          $('#diceNumber').text('')
          $('#diceType').text('')
    
          $('.modalDice').css('transform', 'rotate(0deg)')
          $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
        }, 100000000000))
      }, 2000)
    }
    
    
    </script>
    
    
    
    
    `)
  $('table#weapons').append(newWeapon)
}










function addAttribute(attribute, id) {



  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
  <a id="click_${id}" onclick="roll_dice_rep${id}()">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}"  id="attribute_input_${id}" >
  </div>
  
<script>
  
  function roll${id}(cnt, dice)
  {
    result${id}='';
    sum=0;
    for (var ik=1; ik<=cnt; ik++)
    {
        result${id}+=(ik>1)?'+':'';
          roll_result${id}=Math.floor((Math.random()*dice)+1);
      sum+=roll_result${id};
        result${id}+=roll_result${id};
    }
    result${id}+=(cnt>1)?' = <b>'+sum+'</b>':'';
    element_ID=cnt+'d'+dice;
    document.getElementById(element_ID).innerHTML=result${id};
  }
  





  function roll_dice_rep${id}()
  {
    rep= parseInt(document.getElementById('attribute_input_${id}').value) + parseInt(1);
    cnt= 1;
    dice= 20;
  
    result${id}=' ';
    for (var jk=1; jk<=rep; jk++)
    {
        sum=0;
        for (var ik=1; ik<=cnt; ik++)
        {
            result${id}+=(ik>1)?'+':'';
              roll_result${id}=Math.floor((Math.random()*dice)+1);
          sum+=roll_result${id};
            result${id}+=roll_result${id};
        }
        result${id}+=(cnt>1)?' = <b>'+sum+'</b>':'';
        result${id}+=',  ';
    }




    console.log(this)



    diceModal.css('display', 'block')
  
    setTimeout(() => {
      $('.modalDice').css('transform', 'rotate(360deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
    }, 1000)
  
    setTimeout(() => {
      $('.sanityDice').css('transform', 'rotate(360deg)')
      $('.sanityDice').css('-webkit-transform', 'rotate(360deg)')
    }, 1000)
  
    
  
    setTimeout(() => {
      const diceNumber = result${id}
      $('#diceNumber').text(diceNumber)
  
      setTimeout(() => {
        diceModal.css('display', 'none')
        $('#diceNumber').text('')
        $('#diceType').text('')
  
        $('.modalDice').css('transform', 'rotate(0deg)')
        $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
      }, 100000000000)
    }, 2000)
  

  }
  </script>
  
  `)
  $('#attributesList').append(newAttribute)
}










function addpericia(pericia, id) {



  const newpericia = $(`<div class="pericia" id="pericia_${id}">
  <div class="sty${id}">
  </div>
  <img class="attributeDice" src="./img/dado.png" alt="Dado">
  </a>
    
    <h3>${pericia.type}</h3>
    
    <input type="text" name="appearance" value="${pericia.amount}"  id="pericia_input_${id}" disabled>
  </div>
  
  <style>

  .sty${id} {
    text-align: center;
  }

  




  </style>
  
  `)


  $('#periciasList').append(newpericia)

}


function addpericiar(pericia, id) {



  const newpericiar = $(`<div class="pericia" id="pericia_${id}">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${pericia.type}</h3>
    <input type="text" name="appearance" value="${pericia.amount}"  id="pericia_input_${id}" disabled>
  </div>`)


  $('#periciasListr').append(newpericiar)

}



function deleteWeapon(id) {
  $(`tr#weapon_${id}`).remove()
}















//para vida


function tirar(){
  
  let current = Number($('#lifeCurrent').val()) - 1
  const max = Number($('#lifeMax').val())

  
  data.life.current = current
  data.life.max = max



  $('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
  
  $('#lifeCurrent').val(data.life.current) 
  $('#lifeCount').text(`${data.life.current}/${data.life.max}`)
  
}


function add(){
  
  let current = Number($('#lifeCurrent').val()) + 1
  const max = Number($('#lifeMax').val())

  
  data.life.current = current
  data.life.max = max



  $('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
  
  $('#lifeCurrent').val(data.life.current) 
  $('#lifeCount').text(`${data.life.current}/${data.life.max}`)
  

}




//para sanidade

function tirars(){

  let current = Number($('#sanityCurrent').val()) - 1
  const max = Number($('#sanityMax').val())

  

  data.sanity.current = current
  data.sanity.max = max

  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)

   $('#sanityCurrent').val(data.sanity.current) 
  $('#sanityCount').text(`${current}/${max}`)
  
}


function adds(){

  let current = Number($('#sanityCurrent').val()) + 1
  const max = Number($('#sanityMax').val())

  

  data.sanity.current = current
  data.sanity.max = max

  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)

   $('#sanityCurrent').val(data.sanity.current) 
  $('#sanityCount').text(`${current}/${max}`)
  
}






//para esforço

function tiraro(){
  
  let current = Number($('#lifeCurrento').val()) - 1
  const max = Number($('#lifeMaxo').val())

  
  data.life.current = current
  data.life.max = max



  $('.lifeBaro').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
  
  $('#lifeCurrento').val(data.life.current) 
  $('#lifeCounto').text(`${data.life.current}/${data.life.max}`)
  
}


function addo(){
  
  let current = Number($('#lifeCurrento').val()) + 1
  const max = Number($('#lifeMaxo').val())

  
  data.life.current = current
  data.life.max = max



  $('.lifeBaro').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
  
  $('#lifeCurrento').val(data.life.current) 
  $('#lifeCounto').text(`${data.life.current}/${data.life.max}`)
  

}





function somadadef(valor){

alert(valor)





}