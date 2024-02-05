(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&p(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function p(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const M=["https://www.dailymotion.com/embed/video/x1daqie?autoplay=1","https://www.dailymotion.com/embed/video/x1v36kg?autoplay=1","https://www.dailymotion.com/embed/video/x864f6k?autoplay=1","https://www.dailymotion.com/embed/video/x7ys69h?autoplay=1","https://www.dailymotion.com/embed/video/x8hri2i?autoplay=1","https://www.dailymotion.com/embed/video/xh5m6v?autoplay=1","https://www.dailymotion.com/embed/video/x7twi0g?autoplay=1","https://www.dailymotion.com/embed/video/x8i0iyq?autoplay=1","https://www.dailymotion.com/embed/video/x81kbh6?autoplay=1","https://www.dailymotion.com/embed/video/x72ym6l?autoplay=1","https://www.dailymotion.com/embed/video/x82d1ta?autoplay=1","https://www.dailymotion.com/embed/video/x8ks1kh?autoplay=1","https://www.dailymotion.com/embed/video/x8nct2q?autoplay=1","https://www.dailymotion.com/embed/video/x7xcuxb?autoplay=1","https://www.dailymotion.com/embed/video/x2hqukw?autoplay=1","https://www.dailymotion.com/embed/video/x7z5yw9?autoplay=1","https://www.dailymotion.com/embed/video/x387nfx?autoplay=1","https://www.dailymotion.com/embed/video/x81ktm7?autoplay=1","https://www.dailymotion.com/embed/video/x8p2t3b?autoplay=1","https://www.dailymotion.com/embed/video/xv4tkw?autoplay=1","https://www.dailymotion.com/embed/video/x82ltpn?autoplay=1","https://www.dailymotion.com/embed/video/x8hzd9w?autoplay=1","https://www.dailymotion.com/embed/video/x4z57hw?autoplay=1","https://www.dailymotion.com/embed/video/x3f9esi?autoplay=1","https://www.dailymotion.com/embed/video/x7zdwz4?autoplay=1","https://www.dailymotion.com/embed/video/x15tgvi?autoplay=1","https://www.dailymotion.com/embed/video/x8hspgj?autoplay=1","https://www.dailymotion.com/embed/video/x7u5rhn?autoplay=1","https://www.dailymotion.com/embed/video/x8nqwwy?autoplay=1","https://www.dailymotion.com/embed/video/x8m3rlp?autoplay=1","https://www.dailymotion.com/embed/video/xnc1lu?autoplay=1","https://www.dailymotion.com/embed/video/x59y8h8?autoplay=1"],I=M;function T(d){const n=document.createElement("h1"),s=document.createElement("header"),p=document.createElement("section"),e=document.createElement("section");e.classList.add("movieContainer"),p.classList.add("movieWrapper"),s.classList.add("header"),n.innerHTML="Movies",document.body.appendChild(s),s.appendChild(n),document.body.appendChild(p),p.appendChild(e),(()=>{for(let t=0;t<d.length;t++){const L=document.createElement("p"),b=document.createElement("p"),w=document.createElement("div"),f=document.createElement("button"),h=document.createElement("button"),m=document.createElement("article"),y=document.createElement("p"),v=document.createElement("a"),x=document.createElement("p"),o=document.createElement("section"),a=document.createElement("image"),l=document.createElement("img"),r=document.createElement("iframe"),u=document.createElement("button"),_=document.createElement("img"),c=document.createElement("button"),C=document.createElement("img");o.id="card"+(t+1),o.classList.add("card"),L.classList.add("movieTitle"),b.classList.add("movieYear"),w.classList.add("buttonContainer"),f.classList.add("streamNowBtn"),h.classList.add("trailerBtn"),x.classList.add("moviePrice"),m.classList.add("movieDescription__container"),y.classList.add("movieDescription"),v.classList.add("movieDescription__showmore"),a.classList.add("movieImageContainer"),l.classList.add("movieImage"),C.classList.add("playBtnImg"),c.classList.add("playBtn"),r.classList.add("trailer"),u.classList.add("closeBtn"),_.classList.add("closeBtnImg"),l.setAttribute("src",d[t].imageUrl),r.setAttribute("src",I[t]),r.controls=!0,_.setAttribute("src","./assets/media/close-svgrepo-com.svg"),C.setAttribute("src","./assets/media/play_circle_FILL0_wght400_GRAD0_opsz24.svg"),L.innerHTML=d[t].name,b.innerHTML=d[t].year,f.innerHTML="Stream now",h.innerHTML="Play trailer",y.innerHTML=d[t].description,v.innerHTML="Show more",x.innerHTML=d[t].price+"kr",v.addEventListener("click",g=>{g.target.classList.toggle("showFullDescription"),m.classList.toggle("movieDescription__container--showfull"),y.classList.toggle("movieDescription--showfull"),g.target.classList.contains("showFullDescription")?g.target.innerHTML="Show less":g.target.innerHTML="Show more"}),o.addEventListener("mouseenter",()=>{a.classList.contains("trailer")||c.classList.add("visible")}),o.addEventListener("mouseleave",()=>{c.classList.remove("visible")});const E=()=>{a.classList.add("trailer"),l.classList.add("movieImage__hide"),l.classList.toggle("expand"),a.classList.toggle("expand"),o.classList.toggle("expand"),r.classList.toggle("expand"),o.appendChild(u),u.appendChild(_),a.appendChild(r),c.classList.remove("visible")};c.addEventListener("click",()=>{E()}),a.addEventListener("click",()=>{E()}),h.addEventListener("click",()=>{E()}),u.addEventListener("click",()=>{a.classList.remove("trailer"),l.classList.remove("movieImage__hide"),a.removeChild(r),l.classList.remove("movieImage__hide"),l.classList.toggle("expand"),a.classList.toggle("expand"),o.classList.toggle("expand"),r.classList.toggle("expand"),o.removeChild(u),c.classList.remove("visible")}),e.appendChild(o),o.appendChild(L),o.appendChild(m),w.appendChild(b),m.appendChild(w),w.appendChild(f),w.appendChild(h),m.appendChild(y),m.appendChild(v),m.appendChild(x),o.appendChild(a),a.appendChild(l),o.appendChild(c),c.appendChild(C)}})()}async function B(){const n=await(await fetch("https://medieinstitutet-wie-products.azurewebsites.net/api/products")).json();return n.forEach(s=>{s.name==="Star Wars"&&(s.imageUrl="https://se.originalfilmart.com/cdn/shop/products/star_wars_1977_style_c_printers_proof_original_film_art_5000x.webp?v=1680027227"),s.name==="Alien"&&(s.imageUrl="https://se.originalfilmart.com/cdn/shop/products/alien_1979_german_a1_original_film_art_5000x.jpg?v=1613719562")}),n}T(await B());