interface InfoButtonProps {
  setIsModalDisplayed: React.Dispatch<React.SetStateAction<boolean>>
}


export default function InfoButton(props: InfoButtonProps) {
  return (
    <button
      id="info-modal-button"
      onClick={() => props.setIsModalDisplayed(true)}
    />
  )
}