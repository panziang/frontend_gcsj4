<template>
  <div class="product-detail">
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="info">
      <div class="show-img">
        <img :src="productData.cover_img" alt="">
      </div>
      <div class="show-content">
        <div class="line">
          <div class="price">
            <div class="new">￥ {{ productData.price }}</div>
            <div class="old">￥ {{ productData.old_price }}</div>
          </div>
          <div class="stock">库存{{ productData.stock }}</div>
        </div>
        <div class="title">
          <h2>{{ productData.title }}</h2>
        </div>
        <div class="detail-img">
          <img :src="productData.detail" alt="">
        </div>
      </div>
    </div>
    <van-action-bar placeholder>
      <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickCart" />
      <van-action-bar-button type="warning" text="加入购物车" @click="addProduct()" />
      <van-action-bar-button type="danger" text="立即购买" @click="payClick" />
    </van-action-bar>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { getProductDetail, getAddToCart } from '@/request/product'
  import { onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { Toast } from 'vant';
  import useOrderStore from '@/store/modules/order'
  import { storeToRefs } from 'pinia';

  const route = useRoute()
  const router = useRouter()
  const productId = route.params.id;
  const onClickLeft = () => {
    history.back();
  }
  const onClickCart = () => {
    router.push('/cart')
  }

  const corderStore = useOrderStore()
  const { orderList } = storeToRefs(corderStore)
  const payClick = () => {
    console.log("productData", productData.value);
    let obj = {}
    obj.product_id = productData.value.id
    obj.buy_num = 1
    obj.price = productData.value.price
    obj.total_price = productData.value.price
    obj.product_title = productData.value.title
    obj.product_image = productData.value.cover_img
    orderList.value.push(obj)
    router.push('/pay/' + "PRODUCT")
  }

  const productData = ref({})
  const getProductDetailData = () => {
    getProductDetail(
      {
        id: productId,
      },
      (status, res, data) => {
        console.log('status: ', status)
        console.log('res: ', res)
        console.log('data: ', data)

        if (data.code == '0') {
          console.log("获取商品信息成功");
          productData.value = data.data

        } else {
          Toast.fail("获取商品信息失败 " + data.msg)
          console.log("获取商品信息失败");
        }

      },
      (status, error, msg) => {
        console.log('status: ', status)
        console.log('error: ', error)
        console.log('msg: ', msg)
        console.log("获取商品信息失败");
        Toast.fail("获取商品信息失败 " + msg)
      }
    )
  }
  //添加商品到购物车
  const addProduct = () => {
    getAddToCart(
      {
        product_id: productId,
        buy_num: 1
      },
      (status, res, data) => {
        console.log('status: ', status)
        console.log('res: ', res)
        console.log('data: ', data)

        if (data.code == '0') {
          console.log("添加成功");
          Toast.success('添加成功');
        } else {
          Toast.fail("添加失败 " + data.msg)
          console.log("添加失败");
        }
      },
      (status, error, msg) => {
        console.log('status: ', status)
        console.log('error: ', error)
        console.log('msg: ', msg)
        console.log("添加失败");
        Toast.fail("添加失败 " + msg)
      }
    )
  }
  onMounted(() => {
    getProductDetailData()
  })
</script>

<style lang="less" scoped>
.product-detail {
  .info {
    .show-img {
      img {
        width: 100%;
        height: 240px;
      }
    }

    .show-content {
      .line {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        .price {
          display: flex;
          align-items: baseline;

          margin-top: 30px;

          .new {
            color: red;
            font-size: 40px;
            font-weight: 800;
          }

          .old {
            margin: 0 3px;
            color: #999;
            font-size: 20px;
            text-decoration: line-through;
            margin-left: 10px;
          }
        }

        .stock {
          color: gray;
          font-size: 16px;
          font-weight: 500;
          margin-right: 10px;
        }
      }

      .title {
        background-color: rgb(245, 245, 245);
        height: 30px;
        margin-top: 20px;
      }

      .detail-img {
        margin-top: 30px;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>