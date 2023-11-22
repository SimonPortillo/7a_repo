use context essentials2021
outline = circle(101, "outline", "black")
back = circle(100, "solid", "yellow")
front-left = circle(25, "solid", "white")
front-right = circle(25, "solid", "white")
inner-left = circle(16, "solid", "black")
inner-right = circle(16, "solid", "black")
rect = rectangle(70, 5, "solid", "black")


overlay-xy(inner-left, -56, -60,
  overlay-xy(inner-right, -136, -60,
    overlay-xy(front-left, -40, -50, 
  overlay-xy(front-right, -120, -50, 
        overlay-xy(rect, -65, -135,
          overlay-xy(back, -1, -1, outline))))))