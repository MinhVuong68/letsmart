import { useEffect } from "react"
import { Card, Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap"

const OptionsProduct = (props) => {
    const options = props.data ?? []
    const formData = props.formData
    const setFormData = props.setFormData
    const onSelectOption = props.onSelectOption

    return (
        <Form className="options-product">
            {options.map((option, index) => (
                <FormGroup key={index} className="mb-3">
                    <FormLabel>{option.name}:</FormLabel>
                    <Row className="g-2">
                        {Array.isArray(option.product_option_value) && option.product_option_value.map((item, index) => (
                            <Col
                                key={index}
                                lg={4}
                                md={12}
                            >
                                <Card 

                                    className={
                                        `${formData.option && item.product_option_value_id == formData.option[option.product_option_id] ? 'is-focus' : ' '}
                                        p-3 d-flex justify-content-center align-items-center option-item`
                                    }
                                    onClick={() => {
                                        setFormData({
                                            ...formData,
                                            option: {
                                                ...formData.option,
                                                [option.product_option_id]: item.product_option_value_id.toString()
                                            },
                                        })
                                        
                                        
                                    }}
                                >
                                    {item.name}
                                </Card>
                            </Col>
                        ))}

                    </Row>

                </FormGroup>

            ))}
        </Form>
    )
}

export default OptionsProduct