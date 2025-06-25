document.writeln(`
   <nav class="navbar navbar-expand-lg text-capitalize bg-white">
         <div class="container column-gap-3">
            <h1 class="navbar-brand m-0 fs-reset lh-1 m-0 order-lg-1">
               <a href="index.html" class="text-reset text-decoration-none d-flex">
                  <img src="../../assets/img/logo-supresso.svg" width="100%" height="auto" class="logo" alt="SUPRESSO">
               </a>
            </h1>    
            <ul class="navbar-nav flex-row ms-auto column-gap-3 order-lg-3">
               <li class="nav-item">
                  <a href="#" class="nav-link px-2 py-1 text-reset">
                     <span class="link-icon link-hover">
                        <i class="fas fa-search fa-lg"></i>
                     </span>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="#" class="nav-link px-2 py-1 text-reset">
                     <span class="link-icon link-hover">
                        <i class="fas fa-user fa-lg"></i>
                     </span>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="#" class="nav-link px-2 py-1 text-reset position-relative">
                     <span class="link-icon link-hover">
                        <i class="fas fa-shopping-cart fa-lg"></i>
                     </span>
                     <span class="badge-cart-bg fs-small position-absolute top-0 start-75 translate-middle z-1 bg-danger rounded-circle border border-2 border-body-bg" style="padding: .65rem;"></span>
                     <span class="badge-cart-text fs-small position-absolute top-0 start-75 translate-middle z-2 text-white text-center lh-1">
                        <b class="fw-medium">0</b>
                     </span>
                  </a>
               </li>
            </ul>
            <button class="navbar-toggler rounded-0 shadow-none p-0 border-0 order-lg-4" data-bs-toggle="collapse" data-bs-target="#navcol">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse order-lg-2" id="navcol">
               <ul class="navbar-nav ms-auto text-uppercase">
                  <li class="nav-item">
                     <a href="#" class="nav-link py-lg-1 text-reset position-relative active">
                        <span class="link-text link-hover">
                           <b class="fw-medium">
                              shop
                           </b>
                        </span>
                        <span class="link-icon position-absolute top-100 start-50 translate-middle">&bull;</span>
                     </a>
                  </li>
                  <li class="nav-item">
                     <a href="#" class="nav-link py-lg-1 text-reset position-relative">
                        <span class="link-text link-hover">
                           <b class="fw-medium">
                              coffee
                           </b>
                        </span>
                        <span class="link-icon position-absolute top-100 start-50 translate-middle">&bull;</span>
                     </a>
                  </li>
                  <li class="nav-item">
                     <a href="#" class="nav-link py-lg-1 text-reset position-relative">
                        <span class="link-text link-hover">
                           <b class="fw-medium">
                              machines
                           </b>
                        </span>
                        <span class="link-icon position-absolute top-100 start-50 translate-middle">&bull;</span>
                     </a>
                  </li>
                  <li class="nav-item">
                     <a href="#" class="nav-link py-lg-1 text-reset position-relative">
                        <span class="link-text link-hover">
                           <b class="fw-medium">
                              cafe
                           </b>
                        </span>
                        <span class="link-icon position-absolute top-100 start-50 translate-middle">&bull;</span>
                     </a>
                  </li>
                  <li class="nav-item">
                     <a href="#" class="nav-link py-lg-1 text-reset position-relative">
                        <span class="link-text link-hover">
                           <b class="fw-medium">
                              gallery
                           </b>
                        </span>
                        <span class="link-icon position-absolute top-100 start-50 translate-middle">&bull;</span>
                     </a>
                  </li>
                  <li class="nav-item">
                     <a href="#" class="nav-link py-lg-1 text-reset position-relative">
                        <span class="link-text link-hover">
                           <b class="fw-medium">
                              news
                           </b>
                        </span>
                        <span class="link-icon position-absolute top-100 start-50 translate-middle">&bull;</span>
                     </a>
                  </li>
                  <li class="nav-item">
                     <a href="#" class="nav-link py-lg-1 text-reset position-relative">
                        <span class="link-text link-hover">
                           <b class="fw-medium">
                              contact
                           </b>
                        </span>
                        <span class="link-icon position-absolute top-100 start-50 translate-middle">&bull;</span>
                     </a>
                  </li>
               </ul>
            </div><!-- end navcol -->
         </div><!-- end container -->
      </nav><!-- end navbar -->`)