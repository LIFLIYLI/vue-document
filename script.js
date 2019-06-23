var app= new Vue({
    el:"#app",
    data:{
        message:'<span>hello vue</span>'
    }
})
var title=new Vue({
    el:'#app4',
    data:{
        todos:[
            {index:'第四模块'},
            {index:'遍历'},
            {index:'数组'},
            {index:'新增'}
        ],
 
    }
})
var ifseen=new Vue({
    el:'#app3',
    data:{
        seen:false,
    }
})
var touchclick=new Vue({
    el:'#app2',
    data:{
        message:'页面加载 ' + new Date().toLocaleString(),
    }
})
//document.getElementById('app4').innerText='niha'
var clicks=new Vue({
    el:'#app5',
    data:{
        message:'这是一个点击事件',
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var twoNoun=new Vue({
    el:'#app6',
    data:{
        message:'双向绑定值'
    }
})
// 组件
Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})
var app7= new Vue({
    el:'#app7',
    data:{
        list:[
            {id:1,text:'火车'},
            {id:2,text:'飞机'},
            {id:3,text:'坦克'}
        ]
    }
})
var obj={
    foor:"bar"
}
Object.freeze(obj)
new Vue({
    el:'#app8',
    data:obj
}) 
//huidiao
var data={
    a:'99'
}
var vm=new Vue({
    el:'#app9',
    data:data,
    created:function(){
        console.log(this.a)
    }
})
vm.$watch('a',function(newvalue,oldvalue){
        // 这个回调将在 `vm.a` 改变后调用
        alert('改变')
})
// 计算属性
new Vue({
    el:'#example',
    data:{
        message:'hello',
    },
    computed:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods:{
        changemessage:function(){
            return this.message.split('').reverse().join('')
        }
    }
})
//侦听属性
var vm = new Vue({
    el: '#demo',
    data: {
      firstName: 'Fooshdlbfs',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
  })

new Vue({
    el:'#watch-example',
    data:{
        answer:'nihao',
        question:''
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function (newQuestion, oldQuestion) {
          this.answer = 'Waiting for you to stop typing...'
          this.debouncedGetAnswer()
        }
      },
      created: function () {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
      },
      methods: {
        getAnswer: function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          this.answer = 'Thinking...'
          var vm = this
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        }
      }
})