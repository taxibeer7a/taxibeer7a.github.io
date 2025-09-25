/* Lightbox משופר */
.lightbox {
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.95);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(255,165,0,0.8);
  transition: transform 0.3s ease-in-out;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
}

.prev,
.next {
  cursor: pointer;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  color: #FFA500;
  font-size: 60px;
  font-weight: bold;
  padding: 10px;
  user-select: none;
  transition: color 0.3s;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

.prev:hover,
.next:hover {
  color: #fff;
}
