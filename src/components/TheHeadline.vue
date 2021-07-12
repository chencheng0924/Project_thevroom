<template>
    <div class="titlebox">
            <div class="auctiontitle">{{ titleName }}
                <div class="rect"></div>
                <div class="anrect"></div>
            </div>
    </div>
</template>

<script>
export default {
    props: ['titleName']
}
</script>

<style lang="scss">
.titlebox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 18%;
    color: #FFFFFF;
        .auctiontitle{
            font-size: 40px;
            font-weight: bold;
            display: flex;
            .rect{
            background-color: #F34841;
            width: 13px;
            height: 35px;
            transform: skew(150deg);
            margin-top: 12px;
            margin-left: 20px;
            }
            .anrect{
            background-color: #F34841;
            width: 13px;
            height: 35px;
            transform: skew(150deg);
            margin-top: 12px;
            margin-left: 5px;
            }
        }
}
</style>
