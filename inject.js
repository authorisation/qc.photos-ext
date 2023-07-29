var qcphotos = document.createElement('a');
qcphotos.style.cssText = "background: #f2f2f2; text-align: center; line-height: 50px; margin-bottom: 15px; display: block; color: black;";
qcphotos.id = "QCPhotos";
qcphotos.title = "Open qc.photos pictures";
qcphotos.textContent = "qc.photos";

var divbox = document.querySelector(".Commodity_reference_drawing");
divbox.appendChild(qcphotos);

const hrefLink = document.querySelector('.prlink');
const marketlink = hrefLink ? hrefLink.getAttribute('href') : null;

qcphotos.addEventListener('click', function() {
    window.open("https://qc.photos/qc?url=" + encodeURIComponent(marketlink), '_blank');
});