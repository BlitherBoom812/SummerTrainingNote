import React from 'react'
import {Button, Col, Row, message, Checkbox} from 'antd'
import {PlusOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './App.less'
import ReactDOM from 'react-dom/client';

const { Search } = Input;

const tn = "hello world";

const list = [];

function ChangeTask(e){

}

const Task = (props) => (
  <Checkbox.Group>
      <Checkbox onChange={ChangeTask}>
    {props.taskName}
  </Checkbox>
  <Button type="primary" shape="round" danger>
  删除
  </Button>
  </Checkbox.Group>

);

function addTask(t){
  var x = [1];
  
}

function onAdd(){
  var taskName = document.getElementById("input").value;
  if(taskName == ""){
    message.error("请输入任务名称");
  }
  else{
    addTask(taskName);
    message.success("添加成功");
  }
}

const App = () => (
  <div className="App">
    <Row>
      <Col span={24}>
      <Input.Group compact>
    <Input placeholder="Basic usage" style={{ width: '80%' }} id="input"/>
      <Button type="primary" icon={<PlusOutlined></PlusOutlined>} onClick={onAdd}>
      </Button>
    </Input.Group>
    </Col>
      </Row>
    
    <Row>
      <Col span={12}>
      <Button type="primary" block danger>未完成</Button>
      </Col>
      <Col span={12}>
      <Button type="primary" block>已完成</Button>
      </Col>
    </Row>
    <Task taskName={tn} />
  </div>
);

export default App;
