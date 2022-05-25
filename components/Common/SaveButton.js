import {Button} from 'reactstrap'
import React from 'react'

export default function SaveButton({data}) {

    const onSave = () => {
      console.log('SaveButton_함수 입니다.')
    }

    return (
        <Button
            className="custom-w90"
            color="primary"
            type="button"
            onClick={onSave}
        >
            Save
        </Button>
    )
}