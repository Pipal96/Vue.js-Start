<template>
<div class="wrapper">
<div class="user-block">
  <div class="user-photo">
  </div>
  <div class="info">
 <p class="blod-text">{{userName}}</p>
 <p class="text">{{status}}</p>
  </div>
      <button class="button-add">+</button>
 
 
  </div>
   <hr>
  </div>
</template>

<script>
export default {
    name: 'app-topSidebar',
    data() {
        return {
            userName: 'David Hill',
            status: 'online',
        }
    },
}
</script>

<style scope>
.user-block{
    width: 80%;
    height: 15vh;
    min-height: 60px;
    max-height: 80px;
    padding: 20px 0;
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}

.user-photo {
    width: 35px;
    height: 35px;
    background-color: #2a4249;
    border-radius: 5px;
    cursor: pointer;
    
}

.info {
    margin-left: 10px;
}


</style>