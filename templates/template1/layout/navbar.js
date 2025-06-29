document.writeln(`
<nav class="navbar navbar-expand-lg py-lg-4 bg-body">
   <div class="container column-gap-4 column-gap-lg-5">
      <h1 class="fs-reset lh-base m-0 order-lg-1">
         <a href="index.html" class="navbar-brand d-grid">
            <img src="../../assets/img/logo-supresso.svg" width="100%" height="auto" alt="SUPRESSO" class="img-logo">
         </a>
      </h1>
      <ul class="navbar-nav flex-row ms-auto column-gap-4 order-lg-3">
         <li class="li-item">
            <a href="#" class="nav-link position-relative px-0 py-2 py-lg-1 text-reset" id="nav-search">
               <span class="link-text link-hover">
                  <b class="fw-medium">
                     <i class="fas fa-search fa-lg"></i>
                  </b>
               </span>
               <span class="link-icon position-absolute top-100 start-50 translate-middle visible">
                  &bull;
               </span>
            </a>
         </li>
         <li class="li-item">
            <a href="#" class="nav-link position-relative px-0 py-2 py-lg-1 text-reset" id="nav-account">
               <span class="link-text link-hover">
                  <b class="fw-medium">
                     <i class="fas fa-user fa-lg"></i>
                  </b>
               </span>
               <span class="link-icon position-absolute top-100 start-50 translate-middle visible">
                  &bull;
               </span>
            </a>
         </li>
         <li class="li-item">
            <a href="#" class="nav-link position-relative px-0 py-2 py-lg-1 text-reset" id="nav-cart">
               <span class="link-text link-hover">
                  <b class="fw-medium">
                     <i class="fas fa-shopping-cart fa-lg"></i>
                  </b>
               </span>
               <span class="link-icon position-absolute top-100 start-50 translate-middle visible">
                  &bull;
               </span>
               <span class="position-absolute top-0 start-100 translate-middle bg-danger rounded-circle border border-2 border-body-bg z-0 mt-1 mt-lg-0" style="padding: .75rem;"></span>
               <span class="position-absolute top-0 start-100 translate-middle small fw-medium text-white z-1 lh-1 mt-1 mt-lg-0">100</span>
            </a>
         </li>
      </ul>
      <button class="navbar-toggler rounded-0 p-0 border-0 shadow-none order-lg-4" data-bs-toggle="collapse" data-bs-target="#navcol">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse order-lg-2" id="navcol">
         <ul class="navbar-nav ms-lg-auto text-uppercase column-gap-lg-4 py-4 py-lg-0">
            <li class="nav-item">
               <a href="#" class="nav-link position-relative px-0 py-2 py-lg-1 text-reset active" id="nav-shop">
                  <span class="link-text link-hover">
                     <b class="fw-medium">
                        shop
                     </b>
                  </span>
                  <span class="link-icon position-absolute top-100 start-50 translate-middle visible">
                     &bull;
                  </span>
               </a>
            </li>
            <li class="nav-item">
               <a href="#" class="nav-link position-relative px-0 py-2 py-lg-1 text-reset" id="nav-coffee">
                  <span class="link-text link-hover">
                     <b class="fw-medium">
                        coffee
                     </b>
                  </span>
                  <span class="link-icon position-absolute top-100 start-50 translate-middle visible">
                     &bull;
                  </span>
               </a>
            </li>
            <li class="nav-item">
               <a href="#" class="nav-link position-relative px-0 py-2 py-lg-1 text-reset" id="nav-machine">
                  <span class="link-text link-hover">
                     <b class="fw-medium">
                        machine
                     </b>
                  </span>
                  <span class="link-icon position-absolute top-100 start-50 translate-middle visible">
                     &bull;
                  </span>
               </a>
            </li>
            <li class="nav-item">
               <a href="#" class="nav-link position-relative px-0 py-2 py-lg-1 text-reset" id="nav-cafe">
                  <span class="link-text link-hover">
                     <b class="fw-medium">
                        cafe
                     </b>
                  </span>
                  <span class="link-icon position-absolute top-100 start-50 translate-middle visible">
                     &bull;
                  </span>
               </a>
            </li>
            <li class="nav-item">
               <a href="#" class="nav-link position-relative px-0 py-2 py-lg-1 text-reset" id="nav-gallery">
                  <span class="link-text link-hover">
                     <b class="fw-medium">
                        gallery
                     </b>
                  </span>
                  <span class="link-icon position-absolute top-100 start-50 translate-middle visible">
                     &bull;
                  </span>
               </a>
            </li>
            <li class="nav-item">
               <a href="#" class="nav-link position-relative px-0 py-2 py-lg-1 text-reset" id="nav-news">
                  <span class="link-text link-hover">
                     <b class="fw-medium">
                        news
                     </b>
                  </span>
                  <span class="link-icon position-absolute top-100 start-50 translate-middle visible">
                     &bull;
                  </span>
               </a>
            </li>
            <li class="nav-item">
               <a href="#" class="nav-link position-relative px-0 py-2 py-lg-1 text-reset" id="nav-contact">
                  <span class="link-text link-hover">
                     <b class="fw-medium">
                        contact
                     </b>
                  </span>
                  <span class="link-icon position-absolute top-100 start-50 translate-middle visible">
                     &bull;
                  </span>
               </a>
            </li>
         </ul>
      </div><!-- end navcol -->
   </div><!-- end container -->
</nav><!-- end navbar -->`)