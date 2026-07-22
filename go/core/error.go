package core

type LmWhatsappError struct {
	IsLmWhatsappError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewLmWhatsappError(code string, msg string, ctx *Context) *LmWhatsappError {
	return &LmWhatsappError{
		IsLmWhatsappError: true,
		Sdk:              "LmWhatsapp",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *LmWhatsappError) Error() string {
	return e.Msg
}
