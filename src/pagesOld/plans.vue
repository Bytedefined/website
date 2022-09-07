<template>
<div>
    <div class="flex h-[80vh]">
        <div class="m-auto w-full px-4 pb-6">
            <h1 class="font-semibold text-3xl text-center lg:mt-0 mt-12">Choose your plan</h1>
            <p class="text-center text-gray-300 mt-4 mx-auto max-w-lg">
                Here are all of the available plans with jet.pics, choose one you
                would prefer or stick with the free version.
            </p>

            <div class="flex flex-wrap justify-center gap-6 w-full mt-24">
                <div class="p-4 bg-polar-300 rounded-xl flex flex-col gap-2 w-full max-w-xs">
                    <h1 class="text-2xl text-center font-semibold">Free</h1>

                    <p class="font-semibold text-center mt-4 flex items-center justify-center">
                        <span class="text-gray-300 mr-1">$</span><span class="text-4xl">0.00&nbsp;</span> / mo
                    </p>
                    <div class="text-center grid text-sm gap-2 border-t border-t-neutral-700">
                        <p class="mt-3">Up-to 768MB of Storage</p>
                        <p class="">20MB File Size Limit</p>
                        <p class="">1 invite per invite wave</p>
                    </div>

                    <InteractiveButton class="!text-gray-400 cursor-not-allowed mt-4" text="Current" />
                </div>
                <div class="p-4 bg-polar-400 rounded-xl flex flex-col gap-2 w-full max-w-xs">
                    <div class="flex gap-2 mx-auto items-center">
                        <h1 class="text-2xl font-semibold text-[#5457ab]">Premium</h1>
                        <div class="text-xs bg-[#5457ab] px-2 rounded-xl h-5 flex items-center">Best seller!</div>
                    </div>

                    <p class="font-semibold text-center mt-4 flex items-center justify-center">
                        <span class="text-gray-300 mr-1">$</span><span class="text-4xl">5.00&nbsp;</span> / mo
                    </p>
                    <div class="text-center grid text-sm gap-2 border-t border-t-neutral-700">
                        <p class="mt-3">Up-to 10GB of Storage</p>
                        <p class="">75MB File Size Limit</p>
                        <p class="">2 invites per invite wave</p>
                    </div>

                    <InteractiveButton class="!bg-[#5457ab] hover:!bg-[#6366bb] mt-4" text="Upgrade" />
                </div>
                <div class="p-4 bg-polar-300 rounded-xl flex flex-col gap-2 w-full max-w-xs">
                    <h1 class="text-2xl text-center font-semibold">Advanced</h1>

                    <p class="font-semibold text-center mt-4 flex items-center justify-center">
                        <span class="text-gray-300 mr-1">$</span><span class="text-4xl">10.00&nbsp;</span> / mo
                    </p>
                    <div class="text-center grid text-sm gap-2 border-t border-t-neutral-700">
                        <p class="mt-3">Up-to 100GB of Storage</p>
                        <p class="">125MB File Size Limit</p>
                        <p class="">3 invites per invite wave</p>
                    </div>

                    <InteractiveButton class="!bg-blue-500 hover:!bg-blue-600 mt-4" text="Upgrade" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>
