<template>
  <div style="max-width:1200px;" class="ma-auto">
    <div
      class="d-flex flex-column justify-center"
      style="text-align:center;height:300px"
    >
      <h1>付款成功</h1>
      <h1>我們將盡速為您完成商品安裝!!</h1>
    </div>
    <div class="d-flex justify-space-around align-center mb-10">
        <button-news buttonName="繼續購物" />
        <div class="d-flex align-center">
          <div @click=";(component = 'shopping-car3'), gogo">
            <button-submit class="ml-5" buttonSubmit="會員介面" />
          </div>
        </div>
      </div>
  </div>
</template>
