import styles from '../../../src/navigation/custom/AppMenu.style'

describe('AppMenu styles', () => {
    test('AppMenu match styles', () => {
        const a = {
            container: {
              paddingTop: 20,
              flex: 1
            },
            navItemStyle: {
              padding: 10
            },
            navSectionStyle: {
              backgroundColor: 'light'
            },
            sectionHeadingStyle: {
              paddingVertical: 10,
              paddingHorizontal: 5
            },
            footerContainer: {
              backgroundColor: 'light'
            }
          }
        expect(styles).toEqual(a)
    })
})