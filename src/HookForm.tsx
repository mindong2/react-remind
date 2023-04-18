import { useForm } from "react-hook-form";

interface IForms {
  email: string;
  firstName: string;
  LastName: string;
  UserName: string;
  PassWord: string;
  PassWord1: string;
  extraError: string;
}

const HookForm = () => {
  /* react-hook-form의 사용이유
    기존 회원가입사이트처럼 많은 input의 값을 받고 전달할때 많은 함수가 필요했으나 그것을 보기쉽고 짧은 코드로 사용가능
  */
  const {
    register,
    handleSubmit,
    // formState내 error를 직접 가져옴 structuring
    formState: { errors },
    setError,
  } = useForm<IForms>({
    // 인풋별 default value도 가능
    defaultValues: {
      email: "@naver.com",
    },
  });
  //   console.log(watch());
  const submit = (data: IForms) => {
    // 조건에 맞게 잘 작성했으면 새로고침없이 지정한 register내 data를 잘 불러온다.
    console.log(data);
    if (data.PassWord !== data.PassWord1) {
      // 에러발생 시키기
      setError("PassWord1", { message: "패스워드가 일치하지 않습니다." });
    }

    /**
     만약 서버에서 에러가 날 경우등 예외적인 오류가 필요할땐 interface에 추가하고
     setError("extraError", { message: "서버오류발생" }); 와 같은식으로 에러 추가도 가능
     */
  };
  /*
    react-hook-form을 이용한 register의 오류들을 모음
    */
  console.log(errors);
  return (
    <>
      {/* handleSubmit은 먼저 함수 호출 */}
      <form onSubmit={handleSubmit(submit)}>
        {/* required를 input에도 쓸 수 있지만 개발자도구로 수정가능하고, register내에서는 focus 기능 등 지원이있다. */}
        <div>
          {/* required 에러일때 formState.errors-> message로 'required' */}
          <input
            type="text"
            {...register("email", {
              required: "required",
              pattern: { value: /^[A-Za-z0-9._%+-]+@naver.com$/, message: "패턴이 올바르지 않습니다." },
            })}
            placeholder="email"
          />
          <p>{errors?.email?.message}</p>
        </div>
        <div>
          <input
            type="text"
            {...register("firstName", {
              required: "firstName을 작성해주세요.",
              //   value가 들어가는 속성은 아래와같이
              minLength: {
                value: 1,
                message: "최소 1자리 입력해주세요.",
              },
            })}
            placeholder="firstName"
          />
          <p>{errors?.firstName?.message}</p>
        </div>
        <div>
          <input type="text" {...register("LastName", { required: "LastName을 작성해주세요" })} placeholder="LastName" />
          <p>{errors?.LastName?.message}</p>
        </div>
        <div>
          <input
            type="text"
            {...register("UserName", {
              required: "UserName을 작성해주세요",
              validate: {
                // 아래와같이 여러개의 Validation이 가능하다
                noDongmin: (value) => (value.includes("dongmin") ? "dongmin이 포함된 이름은 사용할 수 없습니다" : true),
                noMin: (value) => (value.includes("min") ? "min이 포함된 이름은 사용할 수 없습니다" : true),
              },
            })}
            placeholder="UserName"
          />
          <p>{errors?.UserName?.message}</p>
        </div>
        <div>
          <input type="text" {...register("PassWord", { required: "PassWord을 작성해주세요" })} placeholder="PassWord" />
          <p>{errors?.PassWord?.message}</p>
        </div>
        <div>
          <input type="text" {...register("PassWord1", { required: "PassWord1을 작성해주세요" })} placeholder="PassWord1" />
          <p>{errors?.PassWord1?.message}</p>
        </div>
        <button>Add</button>
      </form>
    </>
  );
};

export default HookForm;
