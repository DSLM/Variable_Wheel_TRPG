<template>
    <b-navbar type="is-dark" fixed-top="true">
        <template #brand>
        </template>

        <template #start>
            <b-navbar-item href="index.html">
                主页
            </b-navbar-item>
            <b-navbar-dropdown label="序列库">
                <b-navbar-item href="improve.html">
                    强化序列库
                </b-navbar-item>
                <b-navbar-item href="item.html">
                    道具序列库
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
        </template>
    </b-navbar>
</template>
