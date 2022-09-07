<template>
<div>
  <div class="flex h-screen">
    <div class="m-auto p-2">
      <div class="grid gap-2 max-w-lg bg-polar-300/70 p-6 rounded-xl">
        <h1 class="font-medium text-2xl">Reset Password</h1>
        <p class="text-sm text-gray-300">
         Enter the email associated with your Jet.pics account, and we will email you a link to reset your password.
        </p>
        <div class="flex justify-center flex-col gap-2 mt-3">
          <InteractiveInput placeholder="Email address"/>
          <InteractiveButton text="Reset" class="w-fit ml-auto mt-2" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>
