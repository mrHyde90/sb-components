import './mylabel.css';

export interface MyLabelProps {
  /**
   * Mensaje a mostrar de la etiqueta
   */
  label: string;
  /**
   * Este es el tamano de la etiqueta
   */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Si quiere capitalizado
   */
   allCaps?: boolean;
   /**
   * Colores basicos del boton
   */
  color?: 'secondary'|'tertiary'|'primary';
   /**
   * Colores personalizados del boton
   */
    fontColor?: string;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor
}: MyLabelProps) => {
  return (
    <span style={{ color: fontColor }} className={ `label ${ size } text-${color} ${allCaps ? 'capitalize' : ''}` }>
      { label }
    </span>
  )
}