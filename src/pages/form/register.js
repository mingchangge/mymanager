import React from 'react';
import {Card,Form,Input,Button,message,Icon,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,InputNumber} from 'antd';
import moment from 'moment'; //日期插件时使用
const FormItem=Form.Item; //用前先声明
const RadioGroup=Radio.Group;
const TextArea=Input.TextArea;
class FromRegister extends React.Component{
    state={};
    getBase64=(img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            //this.getBase64 方法写在react class里，需要用this调用
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    userImg:imageUrl,
                    loading: false,
                }),
            );
        }
    };
    handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();
        //字段校验
        this.props.form.validateFields((err,value)=>{
            if(!err){
                message.success(`${userInfo.userName},您成功了!`);
            }
        })
    };
    render(){
        const {getFieldDecorator}=this.props.form;
        const formItemLayout={
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:20
            }
        };
        const offsetLayout={
            wrapperCol: {
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        };
        const rowObject={
            minRows:2,
            maxRows:6
        };
        return(
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[{
                                        required:true,
                                        message:'用户名不能为空'
                                    },{
                                        min:2,
                                        max:10,
                                        message:'长度不在范围内'
                                    },{
                                        pattern:/^\w+$/g,
                                        message:'用户名以字母或数字开头'
                                    }]
                                })(
                                    <Input placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'',
                                    rules:[]
                                })(
                                    <Input placeholder="请输入密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1',
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="0">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue:'18',
                                })(
                                    <InputNumber/>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:'1',
                                })(
                                    <Select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest',{
                                    initialValue:['1'],
                                })(
                                    <Select mode="multiple">
                                        <option value="1">one</option>
                                        <option value="2">two</option>
                                        <option value="3">three</option>
                                        <option value="4">four</option>
                                        <option value="5">five</option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否爱玩" {...formItemLayout}>
                            {
                                getFieldDecorator('isSun',{
                                    valuePropName:'checked',
                                    initialValue:true,
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                    initialValue:moment('2018-01-01 10:06'),
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue:'北京市海淀区'
                                })(<TextArea autosize={rowObject}/>)
                            }
                        </FormItem>
                        <FormItem label="时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(<TimePicker/>)
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        onChange={this.handleChange}>
                                        {this.state.userImg?<img src={this.state.userImg} alt=""/>:<Icon type="plus"/>}
                                    </Upload>)
                            }
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            {
                                getFieldDecorator('xy',{
                                    valuePropName:'checked',
                                    initialValue:true,
                                })(
                                    <Checkbox>我已阅读该协议</Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                           <Button type="primary" onClick={this.handleSubmit}>提交</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    };
}
export default Form.create()(FromRegister); //这一步超级重要，否则const {getFieldDecorator}取不到值