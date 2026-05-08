* {
  position: relative;
  width: 50%;
}

.left {
  left: 0;
}

.right {
  left: 50%;
}

.timeline-card {
  background: white;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transform: rotate(-2deg);
}

.right .timeline-card {
  transform: rotate(2deg);
}

.timeline-card img {
  width: 100%;
  border-radius: 18px;
  margin-bottom: 15px;
}

.timeline-card h3 {
  color: #6d8fff;
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.timeline-card p {
  font-size: 1.2rem;
  line-height: 1.7;
}

footer {
  text-align: center;
  padding: 50px;
  background: #dff2ff;
  color: #6b86d6;
  font-size: 1.3rem;
}

@media screen and (max-width: 768px) {

  .hero h1 {
    font-size: 3rem;
  }

  .timeline::after {
    left: 30px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 20px;
  }

  .right {
    left: 0;
  }
}
