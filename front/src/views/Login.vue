<style scoped>
    .login {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        position:fixed;
        /*background-image: url('../assets/images/bg.jpg');*/
    }
    .login-con{
        position: absolute;
        width: 360px;
        right: 180px;
        top: 160px;
    }

    .login-tip {
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
    }
</style>

<template>
    <div class="login">
        <div class="login-con">
            <Card icon="log-in" title="欢迎登录">
                <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
                    <FormItem prop="userName">
                        <Input v-model="form.email" placeholder="请输入用户名">
                                <span slot="prepend">
                                  <Icon :size="16" type="ios-person"></Icon>
                                </span>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                  <Icon :size="14" type="md-lock"></Icon>
                                </span>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button @click="handleSubmit" type="primary" long>登录</Button>
                    </FormItem>
                </Form>
                <p class="login-tip">输入任意用户名和密码即可</p>
                <div class="clear-both"></div>
            </Card>
        </div>
        <div class="clear-both"></div>
    </div>


</template>

<script>
    import http from "../util/http";
    import api from '@/api';
    import UserObject from "../util/user";

    export default {
        data() {
            return {
                form: {
                    email: '799783009@qq.com',
                    password: null
                },
                emailRules: [
                    {
                        required: true, message: '账号不能为空', trigger: 'blur'
                    }
                ],
                passwordRules: [
                    {
                        required: true, message: '密码不能为空', trigger: 'blur'
                    }
                ],
                response: http
            }
        },
        computed: {
            rules() {
                return {
                    email: this.emailRules,
                    password: this.passwordRules
                }
            }
        },
        methods: {
            handleSubmit() {
                let _that = this;
                this.$refs.loginForm.validate(async (valid) => {
                    if (valid) {
                        this.$Message.loading({
                            content: '正在登陆中...',
                            duration: 1
                        })
                        await _that.response.post(api.userLogin, _that.form);
                        if(_that.response.isSuccess){
                            let result = _that.response.responseData;
                            let user = new UserObject();
                            user.setToken(result.access_token);
                            user.setUserInfo(result.user);
                            _that.$router.push({path: '/'})
                        }
                    }
                });
            }
        }
    }
</script>
