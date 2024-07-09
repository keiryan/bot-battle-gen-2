<template>
  <div class="w-full h-full flex flex-col gap-4 items-center justify-center">
    <div class="flex gap-1">
      <div class="flex">
        <Bot size="36" color="#7E7E7E" />
        <MessageSquareMore size="20" color="#7E7E7E" />
      </div>
      <div class="flex">
        <MessageCircleHeart size="20" color="#7E7E7E" class="flipped-icon" />
        <User size="36" color="#7E7E7E" />
      </div>
    </div>
    <div class="text-[#7E7E7E] text-center">Theres no conversation yet. <br>Start it below!</div>
    <!-- For future release -->
    <!-- <div class="robot relative">
      <div class="robot-left-eye eye"></div>
      <div class="robot-right-eye eye"></div>
    </div> -->
  </div>
</template>

<script setup>
import {
  Bot,
  User,
  MessageSquareMore,
  MessageCircleHeart,
} from "lucide-vue-next";
</script>

<script></script>

<style scoped>
.flipped-icon {
  transform: scaleX(-1) translateX(-4px);
  
}
.robot {
  width: 42px;
  height: 32px;
  border: solid black 4px;
  border-radius: 6px;
}

.eye {
  width: 4px;
  height: 10px;
  background-color: black;
  top: 35%;
  position: absolute;
  border-radius: 50px;
}

.robot-left-eye {
  left: 8px;
}

.robot-right-eye {
  right: 8px;
}
</style>
