let yPositie, vorigeLetter, xPositie, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, hoofdLetter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
  yPositie = 160;
  xPositie = 0;
  a = 4
  b = 8
  c = 12
  d = 16
  e = 20
  f = 24
  g = 28
  h = 32
  i = 36
  j = 40
  k = 44
  l = 48
  m = 52
  n = 56
  o = 60
  p = 64
  q = 68
  r = 72
  s = 76
  t = 80
  u = 84
  v = 88
  w = 92
  x = 96
  y = 100
  z = 104
  vorigeLetter = a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
  vorigeLetter = 1;
  textSize(16);
  text('HOOFDLETTERS : ellipse met een random grijswaarde', 20, 20);
  text('kleine letters : een witte ellipse', 20, 40);
  text('enter = |', 450, 20);
  text('. = _', 450, 40);
  text('delete = muisklik', 450, 60);
  text('spatie = spatie', 450, 80);
  textSize (34)
  text('Typ een letter...', 20, 80);
}

function draw() {

  hoofdLetter = random(50,200)
  if (xPositie > windowWidth -100 ) {
    yPositie = yPositie + 124
    xPositie = 0
  }
}

function keyTyped() {
  
  // hoofdletters
  print (xPositie, vorigeLetter);
    if (key === 'A') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (a/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, a, a);
    vorigeLetter = a;
  }
  else if (key === 'B') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (b/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, b, b);
    vorigeLetter = b;
  }
  else if (key === 'C') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (c/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, c, c);
    vorigeLetter = c;
  }
  else if (key === 'D') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (d/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, d, d);
    vorigeLetter = d;
  }
  else if (key === 'E') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (e/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, e, e);
    vorigeLetter = e;
  }
  else if (key === 'F') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (f/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, f, f);
    vorigeLetter = f;
  }
  else if (key === 'G') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (g/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, g, g);
    vorigeLetter = g;
  }
  else if (key === 'H') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (h/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, h, h);
    vorigeLetter = h;
  }
  else if (key === 'I') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (i/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, i, i);
    vorigeLetter = i;
  }
  else if (key === 'J') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (j/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, j, j);
    vorigeLetter = j;
  }
  else if (key === 'K') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (k/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, k, k);
    vorigeLetter = k;
  }
  else if (key === 'L') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (l/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, l, l);
    vorigeLetter = l;
  }
  else if (key === 'M') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (m/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, m, m);
    vorigeLetter = m;
  }
  else if (key === 'N') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (n/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, n, n);
    vorigeLetter = n;
  }
  else if (key === 'O') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (o/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, o, o);
    vorigeLetter = o;
  }
  else if (key === 'P') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (p/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, p, p);
    vorigeLetter = p;
  }
  else if (key === 'Q') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (q/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, q, q);
    vorigeLetter = q;
  }
  else if (key === 'R') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (r/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, r, r);
    vorigeLetter = r;
  }
  else if (key === 'S') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (s/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, s, s);
    vorigeLetter = s;
  }
  else if (key === 'T') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (t/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, t, t);
    vorigeLetter = t;
  }
  else if (key === 'U') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (u/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, u, u);
    vorigeLetter = u;
  }
  else if (key === 'V') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (v/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, v, v);
    vorigeLetter = v;
  }
  else if (key === 'W') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (w/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, w, w);
    vorigeLetter = w;
  }
  else if (key === 'X') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (x/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, x, x);
    vorigeLetter = x;
  }
  else if (key === 'Y') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (y/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, y, y);
    vorigeLetter = y;
  }
  else if (key === 'Z') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (z/2);
    fill (hoofdLetter)
    ellipse(xPositie, yPositie, z, z);
    vorigeLetter = z;
  }

// kleine letters
  if (key === 'a') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (a/2);
    fill (255)
    ellipse(xPositie, yPositie, a, a);
    vorigeLetter = a;
  }
  else if (key === 'b') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (b/2);
    fill (255)
    ellipse(xPositie, yPositie, b, b);
    vorigeLetter = b;
  }
  else if (key === 'c') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (c/2);
    fill (255)
    ellipse(xPositie, yPositie, c, c);
    vorigeLetter = c;
  }
  else if (key === 'd') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (d/2);
    fill (255)
    ellipse(xPositie, yPositie, d, d);
    vorigeLetter = d;
  }
  else if (key === 'e') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (e/2);
    fill (255)
    ellipse(xPositie, yPositie, e, e);
    vorigeLetter = e;
  }
  else if (key === 'f') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (f/2);
    fill (255)
    ellipse(xPositie, yPositie, f, f);
    vorigeLetter = f;
  }
  else if (key === 'g') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (g/2);
    fill (255)
    ellipse(xPositie, yPositie, g, g);
    vorigeLetter = g;
  }
  else if (key === 'h') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (h/2);
    fill (255)
    ellipse(xPositie, yPositie, h, h);
    vorigeLetter = h;
  }
  else if (key === 'i') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (i/2);
    fill (255)
    ellipse(xPositie, yPositie, i, i);
    vorigeLetter = i;
  }
  else if (key === 'j') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (j/2);
    fill (255)
    ellipse(xPositie, yPositie, j, j);
    vorigeLetter = j;
  }
  else if (key === 'k') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (k/2);
    fill (255)
    ellipse(xPositie, yPositie, k, k);
    vorigeLetter = k;
  }
  else if (key === 'l') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (l/2);
    fill (255)
    ellipse(xPositie, yPositie, l, l);
    vorigeLetter = l;
  }
  else if (key === 'm') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (m/2);
    fill (255)
    ellipse(xPositie, yPositie, m, m);
    vorigeLetter = m;
  }
  else if (key === 'n') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (n/2);
    fill (255)
    ellipse(xPositie, yPositie, n, n);
    vorigeLetter = n;
  }
  else if (key === 'o') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (o/2);
    fill (255)
    ellipse(xPositie, yPositie, o, o);
    vorigeLetter = o;
  }
  else if (key === 'p') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (p/2);
    fill (255)
    ellipse(xPositie, yPositie, p, p);
    vorigeLetter = p;
  }
  else if (key === 'q') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (q/2);
    fill (255)
    ellipse(xPositie, yPositie, q, q);
    vorigeLetter = q;
  }
  else if (key === 'r') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (r/2);
    fill (255)
    ellipse(xPositie, yPositie, r, r);
    vorigeLetter = r;
  }
  else if (key === 's') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (s/2);
    fill (255)
    ellipse(xPositie, yPositie, s, s);
    vorigeLetter = s;
  }
  else if (key === 't') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (t/2);
    fill (255)
    ellipse(xPositie, yPositie, t, t);
    vorigeLetter = t;
  }
  else if (key === 'u') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (u/2);
    fill (255)
    ellipse(xPositie, yPositie, u, u);
    vorigeLetter = u;
  }
  else if (key === 'v') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (v/2);
    fill (255)
    ellipse(xPositie, yPositie, v, v);
    vorigeLetter = v;
  }
  else if (key === 'w') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (w/2);
    fill (255)
    ellipse(xPositie, yPositie, w, w);
    vorigeLetter = w;
  }
  else if (key === 'x') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (x/2);
    fill (255)
    ellipse(xPositie, yPositie, x, x);
    vorigeLetter = x;
  }
  else if (key === 'y') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (y/2);
    fill (255)
    ellipse(xPositie, yPositie, y, y);
    vorigeLetter = y;
  }
  else if (key === 'z') {
    xPositie = xPositie + (vorigeLetter /2) + 3 + (z/2);
    fill (255)
    ellipse(xPositie, yPositie, z, z);
    vorigeLetter = z;
  }

  // overige "keys"
  else if (key === ' ') {
    xPositie = xPositie + 52;
  }

  else if (key === '|') {
    xPositie =  + 1;
    yPositie = yPositie + 124;
  }

  else if (key === '_') {
    xPositie = xPositie + (vorigeLetter /2) + 6;
    fill (0)
    ellipse(xPositie, yPositie, 4, 4);
  }
}

function mousePressed (){
  background(240);
  fill (0)
  textSize(16);
  text('HOOFDLETTERS : ellipse met een random grijswaarde', 20, 20);
  text('kleine letters : een witte ellipse', 20, 40);
  text('enter = |', 450, 20);
  text('. = _', 450, 40);
  text('delete = muisklik', 450, 60);
  text('spatie = spatie', 450, 80);
  textSize (34)
  text('Typ een letter...', 20, 80);
  yPositie = 160;
  xPositie = 0
}

