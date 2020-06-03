<template>
    <div class="containerBox">
        <div class="left"></div>
        <div class="main">
            <ul>
                <li>使用flex布局1</li>
                <li>使用flex布局2</li>
                <li>使用flex布局3</li>
                <li>使用flex布局4</li>
                <li>使用flex布局5</li>
                <li>使用flex布局6</li>
            </ul>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped style="scss">
.containerBox{
    display: flex;
    flex-flow: row wrap;
    .main{ width: 600px;}
    .left{flex: 1;}
    .right{flex: 2;}
}
</style>