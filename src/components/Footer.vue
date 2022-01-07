<template>
<footer>
<div class="container">


    <div class="footer__upper">
        <ul>
            <h3>Savollar bormi?</h3>
            <li><a href="">Quyidagi raqamlarga qo'ng'iroq qiling</a></li>
            <li><a href="">+998938806764</a></li>
            <li><a href="">+998918806764</a></li>
            <li><a href="">+998998806764</a></li>
        </ul>
        <ul>
            <h3>Biz Kimmiz</h3>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/creators">Creators</router-link></li>
        </ul>
        <ul>
            <h3>Ijtimoiy tarmoqlar</h3>
            <div style="display: flex;">
                <li><a href=""><i class="fab  fa-instagram"></i></a></li>
            <li><a href=""><i class="fab  fa-telegram"></i></a></li>
            <li><a href=""><i class="fab fa-youtube"></i></a></li>
            </div>
            
        </ul>
    </div>

    <p>All Rights Reserved &copy; 2021</p>
</div>
</footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer{
    margin-top: auto;
}
</style>
