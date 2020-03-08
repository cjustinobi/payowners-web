<template>
  <div>
    <a-row class="hero">
      <a-col :span="12">
        <h1>The Innovative Money <br> Platform</h1>
        <p>
          PayOwners is a Fintech company that offers mobile <br> financial services that meet
          the daily financial needs <br> of individuals and help create business opportunities <br>
          for mobile agents through its mobile applications.
        </p>
        <a-button>Get Started</a-button>
        <div class="app">
          <img src="../../assets/img/app-store.png" alt="app store">
          <img src="../../assets/img/play-store.png" alt="playstore store">
        </div>
      </a-col>
      <a-col :span="12">
        <img src="../../assets/img/landing-vector.png" alt="">
      </a-col>
      <a-col :span="24">
        <h1 class="smarter">Work Smarter and Faster</h1>
      </a-col>
    </a-row>

    <!-- Section Menu -->
    <div class="loan-bg">
      <div class="container ">
        <div class="row m-3">
          <div class="col-md-4 align-content-around my-3">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Save <br>Money</h5>

                <p class="card-text mt-5">We provide the right medium to
                  save and budget your money for
                  your personal goals and more.
                </p>
              </div>
              <div class="col-5"></div>
              <div class="card-body">
                <a href="#" class="card-link stretched-link text-uppercase">Learn More</a>
              </div>
            </div>
          </div>

          <div class="col-md-4  align-content-around my-3">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Invest <br>Money</h5>

                <p class="card-text mt-5">We enable you invest in a broad portfolio
                  of stocks and bonds all in one transaction.
                </p>
              </div>
              <div class="col-5 mt-4"></div>
              <div class="card-body">
                <a href="#" class="card-link text-uppercase">Learn More</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 align-content-around my-3">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title text-capitalize">lend and Borrow <br>Money</h5>

                <p class="card-text mt-5">We provide the right medium to
                  save and budget your money for
                  your personal goals and more.
                </p>
              </div>
              <div class="col-5"></div>
              <div class="card-body">
                <a href="#" class="card-link mt-5 text-uppercase">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Section Menu -->
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="scss" scoped>
  .hero {
    margin-top: 100px;
    padding: 0 24px;
    .ant-btn {
      height: 40px;
    }
  }
  .app {
    margin-top: 20px;
    img {
      width: 130px;
      margin-right: 12px;
    }
  }
  .smarter {
    margin: 34px 0;
    text-align: center;
  }
</style>