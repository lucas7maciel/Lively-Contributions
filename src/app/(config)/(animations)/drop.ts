export const animation = (weeks: any) => `
  <style>
    .day_1 {
  animation: layer_1 0.4s 0.5s normal forwards;
}

.day_2 {
  animation: layer_1, layer_2;
  animation-duration: 0.3s, 0.3s;
  animation-delay: 0.5s, 0.8s; 
  animation-fill-mode: none, forwards;
}

.day_3 {
  animation: layer_1, layer_2, layer_3;
  animation-duration: 0.3s, 0.3s, 0.3s;
  animation-delay: 0.5s, 0.8s, 1.1s; 
  animation-fill-mode: none, none, forwards;
}

.day_4 {
  animation: layer_1, layer_2, layer_3, layer_4;
  animation-duration: 0.3s, 0.3s, 0.3s, 0.3s;
  animation-delay: 0.5s, 0.8s, 1.1s, 1.4s; 
  animation-fill-mode: none, none, none, forwards;
}

.day_5 {
  animation: layer_1, layer_2, layer_3, layer_4, layer_5;
  animation-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
  animation-delay: 0.5s, 0.8s, 1.1s, 1.4s, 1.7s; 
  animation-fill-mode: none, none, none, none, forwards;
}

.day_6 {
  animation: layer_1, layer_2, layer_3, layer_4, layer_5, layer_6;
  animation-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
  animation-delay: 0.5s, 0.8s, 1.1s, 1.4s, 1.7s, 2s; 
  animation-fill-mode: none, none, none, none, none, forwards;
}

  
    @keyframes layer_1 {
      from {
        transform: translate(0px, 0px);
      }
      to {
        transform: translate(0px, 13px);
      }
    }
  
    @keyframes layer_2 {
      from {
        transform: translate(0px, 13px);
      }
      to {
        transform: translate(0px, 26px);
      }
    }
  
    @keyframes layer_3 {
      from {
        transform: translate(0px, 26px);
      }
      to {
        transform: translate(0px, 39px);
      }
    }
  
    @keyframes layer_4 {
      from {
        transform: translate(0px, 39px);
      }
      to {
        transform: translate(0px, 52px);
      }
    }
  
    @keyframes layer_5 {
      from {
        transform: translate(0px, 52px);
      }
      to {
        transform: translate(0px, 65px);
      }
    }
  
    @keyframes layer_6 {
      from {
        transform: translate(0px, 65px);
      }
      to {
        transform: translate(0px, 78px);
      }
    }
  </style>
`;
