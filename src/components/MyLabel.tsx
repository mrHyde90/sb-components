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
     /**
   * Colores personalizados del boton
   */
    backgroundColor?: string;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span style={{ color: fontColor, backgroundColor }} className={ `label ${ size } text-${color} ${allCaps ? 'capitalize' : ''}` }>
      { label }
    </span>
  )
}

export default MyLabel;
