<!doctype html>

<html lang="en">
<body>
  <style>
    * {
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
}
a {
  text-decoration: none;
  color: inherit;
  font-size: 24px;
}

p {
  font-weight: 700;
  text-align: center;
  font-size: 40px;
  font-family: Hack, sans-serif;
  text-transform: uppercase;
  background: linear-gradient(90deg, #000, #fff, #000);
  letter-spacing: 5px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 80%;
  animation: shine 5s linear infinite;
  position: relative;
}

@keyframes shine {
  0% {
    background-position-x: -500%;
  }
  100% {
    background-position-x: 500%;
  }
}

/*  Checkout my other pens on  https://codepen.io/grohit/  */

    </style>
  <p>I've joined the #100DaysOfCode Challenge on Web development.</p>

</body>
</html>
