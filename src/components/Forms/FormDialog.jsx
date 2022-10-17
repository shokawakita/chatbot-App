import React, {useState, useCallback} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {TextInput} from "./index";

const FormDialog = (props) => {
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    // Functions triggered by inputting text value
    const inputDescription = useCallback((event) => {
        setDescription(event.target.value)
    },[setDescription]);

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    },[setEmail]);

    const inputName = useCallback((event) => {
        setName(event.target.value)
    },[setName]);

    const validateEmailFormat = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return regex.test(email)
    }

    const validateRequiredInput = (...args) => {
        let isBlank = false;
        for (let i = 0; i < args.length; i=(i+1)|0) {
            if (args[i] === "") {
                isBlank = true;
            }
        }
        return isBlank
    };

    // Slackに問い合わせがあったことを通知する
    const submitForm = () => {
        const isBlank = validateRequiredInput(name, email, description)
        const isValidEmail = validateEmailFormat(email)

        if (isBlank) {
            alert('必須入力欄が空白です。')
            return false
        } else if (!isValidEmail) {
            alert('メールアドレスの書式が異なります。')
            return false
        } else {
            const payload = {
                text: 'お問い合わせがありました\n'
                    + 'お名前: ' + name + '\n'
                    + 'メールアドレス: ' + email + '\n'
                    + '【問い合わせ内容】\n' + description
            };

            // fetchメソッドでフォームの内容をSlackのIncoming Webhook URL に送信する
            const url = 'https://hooks.slack.com/services/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';
            
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(payload)
            }).then(() => {
                alert('送信が完了しました。追ってご連絡いたします🙌');
                setDescription("")
                setEmail("")
                setName("")
                return props.handleClose()
            })
        }
    };

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>お問い合わせフォーム</DialogTitle>
            <DialogContent>
                <TextInput
                    label={"名前(必須)"} multiline={false} rows={1}
                    value={name} type={"text"} onChange={inputName}
                />
                <TextInput
                    label={"メールアドレス(必須)"} multiline={false} rows={1}
                    value={email} type={"email"} onChange={inputEmail}
                />
                <TextInput
                    label={"お問い合わせ内容(必須)"} multiline={true} rows={5}
                    value={description} type={"text"} onChange={inputDescription}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    キャンセル
                </Button>
                <Button onClick={submitForm} color="primary">
                    送信する
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FormDialog;