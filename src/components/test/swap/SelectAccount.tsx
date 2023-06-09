import {AutoComplete, Button, Col, Form, Input, Row, Space, Tooltip} from "antd";
import {DownOutlined} from "@ant-design/icons";
import React, {useState} from "react";


interface SelectAccountProps {
    accounts: {
        disabled?: boolean;
        [name: string]: any;
    }[]
    onChange?: (value: string) => void
}

const SelectAccount = ({accounts, onChange}: SelectAccountProps) => {
    const [more, setMore] = useState(false)

    return <>
        <Form.Item>
            <Space.Compact className={'flex'} block>
                <Button disabled className={'w80'}>钱包</Button>
                <Form.Item name='account' noStyle>
                    <AutoComplete
                        className={'full'}
                        allowClear
                        placeholder="请输入钱包"
                        options={accounts}
                        onChange={onChange}
                    />
                </Form.Item>
                <Tooltip title={'更多参数'}>
                    <Button
                        onClick={() => {
                            setMore(!more)
                        }}
                        icon={<DownOutlined/>}/>
                </Tooltip>
            </Space.Compact>
        </Form.Item>

        <Row style={{display: more ? 'flex' : 'none'}} gutter={16}>
            <Col span={12}>
                <Form.Item name={'gasPrice'}>
                    <Input
                        className={'addon'}
                        suffix={'Gwei'}
                        placeholder="燃料单价"
                        allowClear
                        addonBefore={'GasPrice'}
                    />
                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item name={'gas'}>
                    <Input
                        className={'addon'}
                        suffix={'万'}
                        placeholder="燃料上限"
                        allowClear
                        addonBefore={'GAS'}/>
                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item name={['block_header', 'number']}>
                    <Input
                        className={'addon'}
                        placeholder="请输入覆盖区块"
                        allowClear
                        addonBefore={'区块'}/>
                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item name={['block_header', 'timestamp']}>
                    <Input
                        className={'addon'}
                        placeholder="请输入覆盖时间"
                        allowClear
                        addonBefore={'时间戳'}/>
                </Form.Item>
            </Col>
        </Row>
    </>
}

export default SelectAccount