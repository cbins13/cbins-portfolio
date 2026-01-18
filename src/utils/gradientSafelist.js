/**
 * Gradient Safelist Utility
 * 
 * This file ensures all gradient classes used in the app are included
 * in the production build. Tailwind CSS v4 needs explicit references
 * to include classes that might be dynamically generated or in components.
 * 
 * Import this file in your main entry point (main.jsx) to ensure
 * all gradient utilities are detected during the build process.
 */

// This object contains all gradient class combinations used in the app
// Having them here ensures Tailwind detects and includes them in the build
export const gradientClasses = {
  // Text gradients
  textBlueToCyan: 'bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-cyan-400',
  textVioletToFuchsia: 'bg-gradient-to-r bg-clip-text text-transparent from-violet-500 to-fuchsia-400',
  textOrangeToAmber: 'bg-gradient-to-r bg-clip-text text-transparent from-orange-400 to-amber-500',
  
  // Background gradients
  bgBlueToCyan: 'bg-gradient-to-r from-blue-500 to-cyan-400',
  bgVioletToFuchsia: 'bg-gradient-to-r from-violet-500 to-fuchsia-400',
  bgBlueToCyan20: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20',
  bgVioletToFuchsia20: 'bg-gradient-to-br from-violet-500/20 to-fuchsia-600/20',
  bgBlueVioletFuchsia10: 'bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-fuchsia-500/10',
  bgBlueToCyan5: 'bg-gradient-to-br from-blue-500/5 via-blue-500/5 to-cyan-500/10',
};

// Export individual class strings to ensure they're referenced
export const gradientClassStrings = [
  'bg-gradient-to-r',
  'bg-gradient-to-br',
  'bg-clip-text',
  'text-transparent',
  'from-blue-500',
  'to-cyan-400',
  'from-violet-500',
  'to-fuchsia-400',
  'from-orange-400',
  'to-amber-500',
  'from-orange-300',
  'to-amber-400',
  'from-blue-500/20',
  'to-blue-600/20',
  'from-violet-500/20',
  'to-fuchsia-600/20',
  'from-blue-500/10',
  'via-violet-500/10',
  'to-fuchsia-500/10',
  'from-blue-500/5',
  'via-blue-500/5',
  'to-cyan-500/10',
  'from-blue-500/50',
];

// This ensures the classes are tree-shaken but still referenced
if (process.env.NODE_ENV === 'production') {
  // Classes are used in components, this ensures they're included
  console.log('Gradient utilities loaded for production build');
}
