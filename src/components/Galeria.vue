<template>
    <section class="container mt-5">
       <div class="row flex-wrap">
            <!-- Cards a mostrar -->
            <div class="cards__item rounded position-relative col-12 col-md-4 mb-2 mb-md-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span class="cards__delete position-absolute">
                    <i class="bi bi-x"></i>
                </span>
                <img class="img-fluid" src="./../prueba.jpeg" alt="">
            </div>
             <!-- Cards a mostrar -->
            <div class="cards__item rounded position-relative col-12 col-md-4 mb-2 mb-md-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span class="cards__delete position-absolute">
                    <i class="bi bi-x"></i>
                </span>
                <div class="row">
                    <div class="col-12">
                        <img class="img-fluid" src="./../prueba.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'GaleriaComponent',
}
</script>