export const animation = (weeks: any) => {
  // Transformar moves do pacman em um map
  // Formatar
  // Pegar da config (spacing + size)
  const rightCorner = (weeks.length - 1) * 13;
  const delay: number = parseFloat(weeks.delay) || 0
  console.log(delay)

  return `
<circle 
    class="pacman"
    cx="12" cy="12" 
    transform-origin="12 12"
    r="3.75"
/>
<style>
/* Style */
.pacman {
    stroke: yellow;
    stroke-dasharray: 18.9, 15;
    stroke-dashoffset: -2.25;
    stroke-width: 7.5;

    fill: none;
}

.pacman {
    /*move through the graph*/ /*otimizar esse css imenso*/
    animation: 
        chomp,
        move_1, move_2, move_3, move_4, 
        move_5, move_6, move_7, move_8,
        move_9, move_10, move_11, move_12, move_13,
        get_out;

    animation-delay: 
        0s,
        ${delay}s, ${10 + delay}s, ${10.5 + delay}s, ${20.5 + delay}s, ${21 + delay}s, ${31 + delay}s, ${31.5 + delay}s, 
        ${41.5 + delay}s, ${42 + delay}s, ${52 + delay}s, ${52.5 + delay}s, ${62.5 + delay}s, ${63 + delay}s,
        ${73 + delay}s;

    animation-duration: 
        0.3s,
        10s, 0.5s, 10s, 0.5s, 10s, 0.5s, 
        10s, 0.5s, 10s, 0.5s, 10s, 0.5s, 10s,
        0.8s;

    animation-fill-mode: 
        none,
        forwards, forwards, forwards, forwards, forwards, forwards, forwards,
        forwards, forwards, forwards, forwards, forwards, forwards,
        forwards;

    animation-direction: 
        alternate,
        normal, normal, normal, normal, normal, normal, normal,
        normal, normal, normal, normal, normal, normal,
        normal;

    animation-iteration-count: 
        infinite,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1;

    animation-timing-function: linear;
}

.contribution {
    transform: scale(0.8);
    animation: be-eaten 2s ease-out;
  }

/* Animations */
@keyframes chomp {
    from {
        stroke-dasharray: 23.55, 15;
        stroke-dashoffset: 0;
    }
    to {
        stroke-dasharray: 18.9, 15;
        stroke-dashoffset: -2.25;
    }
}

  @keyframes be-eaten { /* Contribution */
    10% {
      transform: scale(0);
    }

    80% {
      transform: scale(0);
    }

    100% {
      transform: scale(0.8);
    }
  }

/* Pacman moves */

@keyframes move_1 {
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(${rightCorner}px);
    }
}

@keyframes move_2 {
    from {
        transform: translate(${rightCorner}px, 0px) rotate(90deg);
    }

    to {
        transform: translate(${rightCorner}px, 13px) rotate(90deg);
    }
}

@keyframes move_3 {
    from {
        transform: translate(${rightCorner}px, 13px) rotate(180deg);
    }
    to {
        transform: translate(0px, 13px) rotate(180deg);
    }
}

@keyframes move_4 {
    from {
        transform: translate(0px, 13px) rotate(90deg);
    }
    to {
        transform: translate(0px, 26px) rotate(90deg);
    }
}

@keyframes move_5 {
    from {
        transform: translate(0px, 26px);
    }
    to {
        transform: translate(${rightCorner}px, 26px);
    }
}

@keyframes move_6 {
    from {
        transform: translate(${rightCorner}px, 26px) rotate(90deg);
    }
    to {
        transform: translate(${rightCorner}px, 39px) rotate(90deg);
    }
}

@keyframes move_7 {
    from {
        transform: translate(${rightCorner}px, 39px) rotate(180deg);
    }
    to {
        transform: translate(0, 39px) rotate(180deg);
    }
}

@keyframes move_8 {
    from {
        transform: translate(0px, 39px) rotate(90deg);
    }
    to {
        transform: translate(0px, 52px) rotate(90deg);
    }
}

@keyframes move_9 {
    from {
        transform: translate(0px, 52px);
    }
    to {
        transform: translate(${rightCorner}px, 52px);
    }
}

@keyframes move_10 {
    from {
        transform: translate(${rightCorner}px, 52px) rotate(90deg);
    }
    to {
        transform: translate(${rightCorner}px, 65px) rotate(90deg);
    }
}

@keyframes move_11 {
    from {
        transform: translate(${rightCorner}px, 65px) rotate(180deg);
    }
    to {
        transform: translate(0px, 65px) rotate(180deg);
    }
}

@keyframes move_12 {
    from {
        transform: translate(0px, 65px) rotate(90deg);
    }
    to {
        transform: translate(0px, 78px) rotate(90deg);
    }
}

@keyframes move_13 {
    from {
        transform: translate(0px, 78px);
    }
    to {
        transform: translate(${rightCorner}px, 78px);
    }
}

@keyframes get_out {
    from {
        transform: translate(${rightCorner}px, 78px) scale(1);
    } to {
        transform: translate(${rightCorner}px, 78px) scale(0);
    }
}
</style>
`;
};
