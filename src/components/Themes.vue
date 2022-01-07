<template>
   <div class="topics">
    <div class="topics__header">
        <h2>Mavzularni ko'rish</h2>
    </div>
    <ul class="topics__list">
        <li>
            <a href="/" class="active">Barcha <span>2</span></a>
        </li>
        
        <li>
            <a href="/?q=Javascript">Javascript<span>2</span></a>
        </li>
        
        <li>
            <a href="/?q=Python">Python<span>1</span></a>
        </li>
        

    </ul>
    <a class="btn btn--link" href="/topics/">
        Ko'proq
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <title>chevron-down</title>
            <path d="M16 21l-13-13h-3l16 16 16-16h-3l-13 13z"></path>
        </svg>
    </a>
</div>
</template>
<script>
export default {
  name: "Themes",
};
</script>