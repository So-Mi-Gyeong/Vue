<script setup>
  import { ref, computed, onMounted, watch } from 'vue'

  //section1
  let id = 0

  const newTodo = ref('')
  const hideCompleted = ref(false)
  const todos = ref([
    { id: id++, text: 'HTML 배우기', done: true },
    { id: id++, text: 'JavaScript 배우기', done: true },
    { id: id++, text: 'Vue 배우기', done: false }
  ])

  const filteredTodos = computed(() => {
    return hideCompleted.value
      ? todos.value.filter((t) => !t.done)
      : todos.value
  })

  function addTodo() {
    todos.value = [...todos.value, {id: id++, text: newTodo.value, done: false }]
    newTodo.value = ''
  }

  function removeTodo(todo) {
    todos.value = todos.value.filter((t) => t !== todo)
  }

  //section2
  const pElementRef = ref(null)
  onMounted(() => {
    pElementRef.value.textContent = '마운트 되었어요!'
  })

  //section3
  const todoId = ref(1)
  const todoData = ref(null)

  async function fetchData(){
    todoData.value = null
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
    todoData.value = await res.json()
  }

  fetchData()
  watch(todoId, fetchData)
</script>

<template>
  <!-- section1 -->
   <section>
    <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button class="addBtn">Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button class="deleteBtn" @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button class="todoBtn" @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'show all' : 'Hide completed' }}
    </button>
   </section>

  <!-- section2 -->
  <section>
    <p ref="pElementRef">안녕</p>
  </section>
  
  <!-- section3 -->
   <section>
    <p>할 일 id: {{ todoId }}</p>
    <button class="nextTodoBtn" @click="todoId++" :disabled="!todoData">다음 할 일 가져오기</button>
    <p v-if="!todoData">로딩...</p>
    <pre v-else>{{ todoData }}</pre>
   </section>

   <section>
   </section>
</template>

<style scoped lang="scss">
section{
  padding: 0 3rem 3rem;
  border-bottom: .1rem solid #000;
  & + section{margin-top: 3rem;}
  &:first-of-type{margin-top: 3rem;}
}
.done{text-decoration: line-through;}
.addBtn{
  width: fit-content;
  height: 3rem;
  padding: 0 2rem;
  margin-left: 1rem;
  color: #fff;
  border-radius: .8rem;
  background-color: #000;
}
.deleteBtn{
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  color: #fff;
  background-color: #999;
}
.todoBtn{
  width: fit-content;
  height: 3rem;
  padding: 0 2rem;
  margin-top: 1rem;
  color: #fff;
  border-radius: .8rem;
  background-color: #000;
}
.nextTodoBtn{
  width: fit-content;
  height: 3rem;
  padding: 0 2rem;
  margin-top: 1rem;
  color: #fff;
  border-radius: .8rem;
  background-color: #000;
}
</style>