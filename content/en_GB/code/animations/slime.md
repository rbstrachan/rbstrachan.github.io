---
title: "physarum"
aliases:
  - physarum
---

This animation explores the study of biological computing, specifically the foraging behaviour of the Physarum polycephalum slime mould, which is famous for its ability to optimise pathways across its network. The inspiration for this animation came from [Patt Vira](https://youtu.be/VyXxSNcgDtg)'s video on the topic, who herself was inspired by [Jeff Jones](https://uwe-repository.worktribe.com/output/980579/characteristics-of-pattern-formation-and-evolution-in-approximations-of-physarum-transport-networks)'s algorithm.

# The math
The simulation is an agent-based model where emergent complexity arises from three mathematical stages — sensing, steering and decaying.
## Sensing
Each agent possesses a heading $θ(t)$ and three sensors (left, forward, right) positioned at a distance $d$ from the agent. The spatial coordinates for a sensor at offset angle $ϕ$ are calculated using
$$
s_x=a_x+d\cos(θ+ϕ)\\
s_y=a_y+d\sin(θ+ϕ)
$$
where $s$ is a sensor and $a$ is the agent. The agent "samples" the trail map at these coordinates to determine the local pheromone concentration $C$.
## Steering
The agent's movement is governed by a simple steering rule based on the sampled concentrations $C_L$, $C_F$, and $C_R$. To decide the next heading $θ(t+1)$, the agent follows the gradient of the highest concentration.

If $C_F > C_L$ and $C_F > C_R$, the agent continues straight, so $Δθ=0$. If $C_F < C_L$ and $C_F < C_R$, the agent randomly rotates either left or right by the rotation angle $α$. Otherwise, it rotates toward the side with the higher concentration.
## Decay
The environment itself is a dynamic grid. Every frame, the pheromone map undergoes two processes — deposition and decay — to simulate biological dissipation, with an option third step, diffusion.

As an agent moves to a new pixel, it increases that pixel’s intensity
$$
C_{new} = C_{old}+ScentStrength
$$
through a process called deposition. Then, to prevent the map from saturating, every pixel value is multiplied by a decay factor $γ$ (where $0<γ<1$).
$$
C(t+1)=C(t)γ
$$
To create smoother paths, the values are then optionally often diffused by averaging them with their neighbours using a Laplacian-like kernel, simulating the natural spreading of chemicals through a medium.

# Play with the code!
See the code, change the parameters and try creating your very own Physarum network in the [p5.js web editor](https://editor.p5js.org/reiwa/sketches/44ueVo8Ev).

<iframe src="https://editor.p5js.org/reiwa/full/44ueVo8Ev" style="width: 100%; height: 500px;"></iframe>
