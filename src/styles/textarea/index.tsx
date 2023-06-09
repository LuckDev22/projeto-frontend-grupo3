import { TextareaStyled } from "./style";

interface iTextareaProps {
  id?: string | undefined;
  label?: string;
  className?: string;
  placeholder?: string;
  register?: object;
  disabled?: boolean | undefined;
  title?: string;
  status?: string;
  enableButton?: () => void;
  rows?: string | any;
  cols?: number | undefined;
  name?: string;
}

export const Textarea = ({
  id,
  label,
  className,
  name,
  placeholder,
  register,
  disabled,
  title,
  status,
  cols,
  rows,
}: iTextareaProps) => {
  return (
    <TextareaStyled>
      <div className="label-content">
        <textarea
          className={className}
          id={id}
          name={name}
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          {...register}
          disabled={disabled}
          defaultValue={title ? title : status}
        />
        <label className="label" htmlFor={id}>
          {label}
        </label>
      </div>
    </TextareaStyled>
  );
};
